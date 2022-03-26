import {ReactElement, useEffect, useState} from 'react'

import {searchPet} from '../../api/PetsAPI'
import Footer from '../../components/Footer'
import Pagination from '../../components/Pagination'
import {PetStatus} from '../../constants/EnumType'
import Banner from './Banner'
import Menu from './Menu'
import Profile from './Profile'
import SearchBoard from './SearchBoard'

export default function PetList(): ReactElement {
  const [totalPage, setTotalPage] = useState<number>(0)
  const [pets, setPets] = useState<PetDataType[]>([])
  const [filters, setFilters] = useState<SearchPetFilters>({
    status: PetStatus.OPEN,
    limit: 18,
    page: 1,
    ascend: true,
  })
  useEffect(() => {
    searchPet(setPets, setTotalPage, filters)
  }, [])
  useEffect(() => {
    searchPet(setPets, setTotalPage, filters)
  }, [filters, totalPage])

  return (
    <>
      <Menu setFilters={setFilters} filters={filters} />
      <div className="pet-wrapper">
        <div className="search-board-wrap">
          <SearchBoard />
        </div>
        <div className="pet-list-wrap">
          <Banner />
          <div id="PetList">
            <>
              {pets.map((ele) => (
                <Profile key={ele.id} pet={ele} />
              ))}
            </>
          </div>
          <Pagination
            pageCount={totalPage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            className="pet-list-pagination"
            setState={setFilters}
            state={filters}
            scrollTop={true}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}
