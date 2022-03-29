import {PetAge} from '../../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {getPets} from '../../../store/reducers/petListSlice'
import {
  AgeItem,
  AgeItems,
  AgeName,
  AgeWrap,
} from '../../../styled/PetList/SearchBoard'

const PetAgeName = {
  'All': '全部',
  'A': '成年',
  'C': '幼年',
}
const AgeFilter = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.petList)
  return (
    <AgeWrap>
      <AgeName>年齡</AgeName>
      <AgeItems>
        {Object.values(PetAge).map((age) => (
          <AgeItem
            key={age}
            className={state.filters.age === age ? 'selected' : ''}
            onClick={() => dispatch(getPets({...state.filters, age, page: 1}))}>
            {PetAgeName[age]}
          </AgeItem>
        ))}
      </AgeItems>
    </AgeWrap>
  )
}

export default AgeFilter
