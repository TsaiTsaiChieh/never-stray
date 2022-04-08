import {PetKind} from '../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {getPets} from '../../store/reducers/petListSlice'
import {
  Img,
  KindContainer,
  StyledMenu,
  Text,
  Wrap,
} from '../../styled/PetList/Menu'
import {FilterButton} from './FilterButton'

const Menu = () => {
  const state = useAppSelector((state) => state.petList)
  const dispatch = useAppDispatch()

  return (
    <StyledMenu>
      <FilterButton />
      <KindContainer >
        {Object.values(PetKind).map((kind) => (
          <Wrap
            key={kind}
            className={`${kind}-option
          ${state.filters.kind === kind ? 'option-selected' : ''}`}
            onClick={() => {
              dispatch(getPets({...state.filters, kind, page: 1}))
            }}
          >
            <Img
              className={`${kind}-svg`}
              src={`images/Menu/${kind}-option.svg`}
            />
            <Text className={`${kind}-text`} />
          </Wrap>
        ))}
      </KindContainer>
    </StyledMenu>
  )
}
export default Menu
