import {ReactElement, useEffect} from 'react'

import Footer from '../../components/Footer'
import Pagination from '../../components/Pagination'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {getPets} from '../../store/reducers/petListSlice'
import Banner from './Banner'
import Menu from './Menu'
import NotFound from './NotFound'
import Profile from './Profile'
import SearchBoard from './Search'

export default function PetList(): ReactElement {
  const dispatch = useAppDispatch()
  const petState = useAppSelector((state) => state.petList)

  useEffect(() => {
    dispatch(getPets())
  }, [])

  return (
    <>
      <Menu />
      <div className="pet-wrapper">
        <div className="search-board-wrap">
          <SearchBoard />
        </div>
        <div className="pet-list-wrap">
          <Banner />
          <div id="PetList">
            {petState.pets.length ? (
              petState.pets &&
              petState.pets.map((ele: IPet) => (
                <Profile key={ele.id} pet={ele} />
              ))
            ) : (
              <NotFound />
            )}
          </div>
          <Pagination
            pageCount={petState.totalPage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            className="pet-list-pagination"
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
