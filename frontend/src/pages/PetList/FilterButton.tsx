import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {filterBtnOnClick} from '../../store/reducers/uiSlice'
import {FilterContainer, Icon, Name} from '../../styled/PetList/FilterButton'

export const FilterButton = () => {
  const {filterBtnIsShow} = useAppSelector((state) => state.ui)
  const useDispatch = useAppDispatch()

  return (
    <FilterContainer isShow={filterBtnIsShow}
      onClick={() => useDispatch(filterBtnOnClick())}>
      <Icon />
      <Name />
    </FilterContainer>
  )
}
