import {ReactElement, useEffect, useState} from 'react'

import {searchPet} from '../../api/PetsAPI'
import Footer from '../../components/Footer'
import StyledPagination from '../../components/Pagination'
import {PetStatus} from '../../constants/EnumType'
import Banner from './Banner'
import Menu from './Menu'
import PetProfile from './PetProfile'

export default function PetList(): ReactElement {
  const [_, setTotal] = useState<number>(0)
  const [pets, setPets] = useState<PetDataType[]>([])
  const [searchFilters, setSearchFilters] = useState<SearchPetFilters>({
    status: PetStatus.OPEN,
    limit: 12,
    page: 1,
    ascend: true,
  })
  useEffect(() => {
    searchPet(setPets, setTotal, searchFilters)
  }, [])

  return (
    <>
      <Menu
        setPets={setPets}
        setTotal={setTotal}
        setSearchFilters={setSearchFilters}
        searchFilters={searchFilters}
      />
      <Banner />
      <div id="PetList">
        <>
          {pets.map((ele) => (
            <PetProfile key={ele.id} pet={ele} />
          ))}
        </>
      </div>
      <StyledPagination
        setPets={setPets}
        setTotal={setTotal}
        setSearchFilters={setSearchFilters}
        searchFilters={searchFilters}
      />
      <Footer />
    </>
  )
}
