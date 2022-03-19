import {Dispatch, SetStateAction, useState} from 'react'

import {searchPet} from '../../api/PetsAPI'
import {PetKind} from '../../constants/EnumType'
import {Img, StyledMenu, Text, Wrap} from '../../styled/PetList/Menu'

interface Props {
  setPets: Dispatch<SetStateAction<PetDataType[]>>
  setTotal: Dispatch<SetStateAction<number>>
  setSearchFilters: Dispatch<SetStateAction<SearchPetFilters>>
  searchFilters: SearchPetFilters
}
const Menu = ({
  setPets,
  setTotal,
  setSearchFilters,
  searchFilters,
}: Props) => {
  const [selected, setSelected] = useState<string>(PetKind.ALL)
  return (
    <StyledMenu>
      {Object.values(PetKind).map((kind) => (
        <Wrap
          key={kind}
          className={`${kind}-option
          ${selected === kind ? 'option-selected' : ''}`}
          onClick={() => {
            setSelected(kind)
            setSearchFilters({...searchFilters, kind, page: 1})
            searchPet(setPets, setTotal, {...searchFilters, kind, page: 1})
          }}>
          <Img
            className={`${kind}-svg`}
            src={`images/Menu/${kind}-option.svg`} />
          <Text className={`${kind}-text`} />
        </Wrap>
      ))}
    </StyledMenu>
  )
}
export default Menu
