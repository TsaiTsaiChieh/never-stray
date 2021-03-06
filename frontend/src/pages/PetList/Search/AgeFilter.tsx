import {PetAge} from '../../../constants/EnumType'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {updateFilters} from '../../../store/reducers/petListSlice'
import {
  AgeItem,
  AgeItems,
  AgeName,
  AgeWrap,
} from '../../../styled/PetList/SearchBoard'
import {petAgeConverter} from '../../../utils/value-converter'

const AgeFilter = () => {
  const dispatch = useAppDispatch()
  const {filters} = useAppSelector((state) => state.petList)

  const toggleAgeOpt = (age: PetAge) =>
    filters.age.includes(age) ?
      filters.age.filter((ele) => ele !== age) :
      [...filters.age, age]

  const onClick = (age: PetAge) => {
    const expandFilters = {...filters, age: toggleAgeOpt(age), page: 1}
    dispatch(updateFilters(expandFilters))
  }

  return (
    <AgeWrap>
      <AgeName>年齡</AgeName>
      <AgeItems>
        {Object.values(PetAge).map((age) => (
          <AgeItem
            key={age}
            className={filters.age.includes(age) ? 'selected' : ''}
            onClick={() => onClick(age)}
          >
            {petAgeConverter(age)}
          </AgeItem>
        ))}
      </AgeItems>
    </AgeWrap>
  )
}

export default AgeFilter
