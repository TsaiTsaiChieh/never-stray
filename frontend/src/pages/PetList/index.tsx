import {ReactElement, useEffect, useState} from 'react'

import {searchPet} from '../../api/PetsAPI'
import StyledFooter from '../../components/Footer'
import {PetStatus} from '../../constants/EnumType'
import StyledBanner from './Banner'
import StyledMenu from './Menu'
import StyledPetProfile from './PetProfile'

export default function PetList(): ReactElement {
  const [pets, setPets] = useState<PetDataType[]>([])
  const [searchFilters, _] = useState<SearchPetFilters>({
    status: PetStatus.OPEN,
    limit: 12,
    page: 1,
    ascend: true,
  })

  useEffect(() => {
    searchPet(setPets, searchFilters)
  }, [])

  return (
    <>
      <StyledMenu setPets={setPets} searchFilters={searchFilters} />
      <StyledBanner />
      <div id="PetList" >
        <>
          {pets.map((ele) => (
            <StyledPetProfile key={ele.id} pet={ele} />
          ))}
        </>
      </div>
      <StyledFooter />
    </>
  )
}
