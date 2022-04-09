import {useAppDispatch} from '../../store/hooks'
import {filterBtnOnClick} from '../../store/reducers/uiSlice'
import {FilterContainer, Icon, Name} from '../../styled/PetList/FilterButton'

export const FilterButton = () => {
  const useDispatch = useAppDispatch()

  return (
    <FilterContainer onClick={() => useDispatch(filterBtnOnClick())}>
      <Icon />
      <Name />
    </FilterContainer>
  )
}
