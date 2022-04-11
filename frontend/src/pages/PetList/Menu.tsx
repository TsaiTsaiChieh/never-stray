import {isMobile} from 'react-device-detect'

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
import {KeywordSearch, KeywordSearchBtn} from './Search/KeywordSearch'

const Menu = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const {kindContainerIsShow} = useAppSelector((state) => state.ui)
  const dispatch = useAppDispatch()

  return (
    <StyledMenu>
      <FilterButton />
      <KindContainer isShow={kindContainerIsShow}>
        {Object.values(PetKind).map((kind) => (
          <Wrap
            key={kind}
            className={`${kind}-option
          ${filters.kind === kind ? 'option-selected' : ''}`}
            onClick={() => {
              dispatch(getPets({...filters, kind, page: 1}))
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
      <KeywordSearch />
      {isMobile ? <KeywordSearchBtn /> : <></>}
    </StyledMenu>
  )
}
export default Menu
