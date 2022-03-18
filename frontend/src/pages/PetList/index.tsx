import {ReactElement, useEffect, useState} from 'react'

import {searchPet} from '../../api/PetsAPI'
import StyledFooter from '../../components/Footer'
import StyledPagination from '../../components/Pagination'
import {PetStatus} from '../../constants/EnumType'
import StyledBanner from './Banner'
import StyledMenu from './Menu'
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
      <StyledMenu
        setPets={setPets}
        setTotal={setTotal}
        setSearchFilters={setSearchFilters}
        searchFilters={searchFilters}
      />
      <StyledBanner />
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
      <StyledFooter />
    </>
  )
}
