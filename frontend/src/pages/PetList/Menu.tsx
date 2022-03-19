import {Dispatch, SetStateAction, useState} from 'react'

import {PetKind} from '../../constants/EnumType'
import {Img, StyledMenu, Text, Wrap} from '../../styled/PetList/Menu'

interface Props {
  setFilters: Dispatch<SetStateAction<SearchPetFilters>>
  filters: SearchPetFilters
}
const Menu = ({setFilters, filters}: Props) => {
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
            setFilters({...filters, kind, page: 1})
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
