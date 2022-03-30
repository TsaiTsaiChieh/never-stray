import {PetKind} from '../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {getPets} from '../../store/reducers/petListSlice'
import {Img, StyledMenu, Text, Wrap} from '../../styled/PetList/Menu'

const Menu = () => {
  const state = useAppSelector((state) => state.petList)
  const dispatch = useAppDispatch()

  return (
    <StyledMenu>
      {Object.values(PetKind).map((kind) => (
        <Wrap
          key={kind}
          className={`${kind}-option
          ${state.filters.kind === kind ? 'option-selected' : ''}`}
          onClick={() => {
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
