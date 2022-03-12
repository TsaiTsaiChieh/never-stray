import {ReactElement, useEffect, useState} from 'react'

import {searchPet} from '../../api/PetsAPI'
import StyledPetProfile from './PetProfile'

export default function PetList(): ReactElement {
  const [pets, setPets] = useState<PetDataType[]>([])

  useEffect(() => {
    searchPet(setPets)
  }, [])

  return (
    <div id="PetList">
      <>
        {pets.map((ele) => (
          <StyledPetProfile key={ele.id} pet={ele} />
        ))}
      </>
    </div>
  )
}
