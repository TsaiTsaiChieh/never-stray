import {useGetPetsByFiltersQuery} from '../../services/api'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import Banner from './Banner'
import Menu from './Menu'
import NotFound from './NotFound'
import OrderFilter from './OrderFilter'
import Profile from './Profile'
import SearchBoard from './Search'
import ShouldLoginWarning from '../../components/ShouldLoginWarning'

export const PetList = () => {
  const dispatch = useAppDispatch()
  const petState = useAppSelector((state) => state.petList)
  const {data} = useGetPetsByFiltersQuery({...petState.filters})

  return (
    <>
      <Header />
      <Menu />
      <ShouldLoginWarning featureName='加入我的小窩' />
      <div className='pet-wrapper'>
        <div className='search-board-wrap'>
          <SearchBoard count={data?.page.count} />
        </div>
        <div className='pet-list-wrap'>
          <Banner />
          <OrderFilter />
          <div id='PetList'>
            {data && data.pets.length ? (
              data.pets &&
              data.pets.map((ele: IPet) => (
                <Profile key={ele.id} pet={ele} />
              ))
            ) : (
              <NotFound />
            )}
          </div>
          <Pagination
            pageCount={data?.page.total}
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
