
import {ReactElement, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import Footer from '../../components/Footer'
import Pagination from '../../components/Pagination'
import {RootState} from '../../store'
import {fetchPets} from '../../store/pet/actions'
import Banner from './Banner'
import Menu from './Menu'
import Profile from './Profile'
import SearchBoard from './SearchBoard'

export default function PetList(): ReactElement {
  const petState = useSelector((state: RootState) => state.pet)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPets())
  }, [])

  return (
    <>
      <Menu dispatch={dispatch} state={petState} />
      <div className="pet-wrapper">
        <div className="search-board-wrap">
          <SearchBoard />
        </div>
        <div className="pet-list-wrap">
          <Banner />
          <div id="PetList">
            <>
              {petState.pets && petState.pets.map((ele) => (
                <Profile key={ele.id} pet={ele} />
              ))}
            </>
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
