import {isDesktop} from 'react-device-detect'

import {useAppDispatch} from '../../store/hooks'
import {filterBtnOnClick} from '../../store/reducers/uiSlice'
import {FilterContainer, Icon, Name} from '../../styled/PetList/FilterButton'

export const FilterButton = () => {
  const useDispatch = useAppDispatch()

  const clickHandler = () => {
    if (isDesktop) return
    useDispatch(filterBtnOnClick())
  }

  return (
    <FilterContainer onClick={clickHandler}>
      <Icon />
      <Name />
    </FilterContainer>
  )
}
