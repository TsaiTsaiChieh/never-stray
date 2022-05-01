import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {updateFilters} from '../../../store/reducers/petListSlice'
import {TrackingFilterBtn} from '../../../styled/PetList/OrderFilter'

const TrackingFilter = () => {
  const {filters} = useAppSelector((state) => state.petList)
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(updateFilters({...filters, tracking: !filters.tracking, page: 1}))
  }

  return (
    <TrackingFilterBtn
      className={filters.tracking ? 'selected' : ''}
      onClick={() => onClick()}>我的小窩</TrackingFilterBtn>
  )
}

export default TrackingFilter
