
import {useState} from 'react'

import {PetKind} from '../../constants/EnumType'
import {PetState} from '../../store/pet/reducer'
import {getPets} from '../../store/reducers/petListSlice'
import {Img, StyledMenu, Text, Wrap} from '../../styled/PetList/Menu'

interface Props {
  state: PetState
  dispatch: (value: any) => void
}
const Menu = ({dispatch, state}: Props) => {
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
            dispatch(getPets({...state.filters, kind, page: 1}))
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
