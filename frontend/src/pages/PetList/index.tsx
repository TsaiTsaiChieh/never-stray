import {ReactElement, useEffect, useState} from 'react'

import {searchPet} from '../../api/PetsAPI'
import StyledMenu from './Menu'
import StyledPetProfile from './PetProfile'

export default function PetList(): ReactElement {
  const [pets, setPets] = useState<PetDataType[]>([])

  useEffect(() => {
    searchPet(setPets)
  }, [])

  return (
    <>
      <StyledMenu />
      <div id="PetList">
        <>
          {pets.map((ele) => (
            <StyledPetProfile key={ele.id} pet={ele} />
          ))}
        </>
      </div>
    </>
  )
}
