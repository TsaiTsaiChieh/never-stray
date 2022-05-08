import {PetKind} from '../../../constants/EnumType'
import {useAppDispatch} from '../../../store/hooks/index'
import {updateFilters} from '../../../store/reducers/petListSlice'
import {CleanupFiltersBtn} from '../../../styled/PetList/SearchBoard'

const CleanupFilters = () => {
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(updateFilters({
      status: [],
      ref: [],
      city_id: [],
      shelter_id: [],
      kind: PetKind.ALL,
      age: [],
      sex: [],
      region: [],
      ligation: [],
      color: [],
      tracking: false,
      limit: 18,
      page: 1,
      ascend: true,
    }))
  }

  return (
    <CleanupFiltersBtn onClick={() => onClick()}>清除條件</CleanupFiltersBtn>
  )
}

export default CleanupFilters
