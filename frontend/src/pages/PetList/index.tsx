import {useEffect} from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Mask from '../../components/Mask'
import Pagination from '../../components/Pagination'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {getPets} from '../../store/reducers/petListSlice'
import Banner from './Banner'
import Menu from './Menu'
import NotFound from './NotFound'
import OrderFilter from './OrderFilter'
import Profile from './Profile'
import SearchBoard from './Search'

export const PetList = () => {
  const dispatch = useAppDispatch()
  const petState = useAppSelector((state) => state.petList)

  useEffect(() => {
    dispatch(getPets({...petState.filters}))
  }, [])

  return (
    <>
      <Mask />
      <Header />
      <Menu />
      <div className='pet-wrapper'>
        <div className='search-board-wrap'>
          <SearchBoard />
        </div>
        <div className='pet-list-wrap'>
          <Banner />
          <OrderFilter />
          <div id='PetList'>
            {petState.pets.length ? (
              petState.pets &&
              petState.pets.map((ele: IPet, idx: number) => (
                <Profile key={ele.id} pet={ele} idx={idx} />
              ))
            ) : (
              <NotFound />
            )}
          </div>
          <Pagination
            pageCount={petState.totalPage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            className='pet-list-pagination'
            dispatch={dispatch}
            state={petState}
            scrollTop={true}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PetList
