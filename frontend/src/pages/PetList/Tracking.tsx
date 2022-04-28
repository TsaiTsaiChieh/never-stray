import {
  useAddTrackingApiMutation,
  useRemoveTrackingApiMutation,
} from '../../api/tracking'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {togglePetTracking} from '../../store/reducers/petListSlice'
import {TrackingOrNot} from '../../styled/PetList/Tracking'

interface Props {
  id: number
  tracking: boolean
  idx: number
}
const Tracking = ({id, tracking, idx}: Props) => {
  const {isLogin} = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const [addTrackingApi] = useAddTrackingApiMutation()
  const [removeTrackingApi] = useRemoveTrackingApiMutation()

  const toggleTracking = () => {
    if (!isLogin) return
    dispatch(togglePetTracking({idx}))
    if (tracking) removeTrackingApi({pet_id: id})
    else addTrackingApi({pet_id: id})
  }

  return <TrackingOrNot onClick={() => toggleTracking()} tracking={tracking} />
}

export default Tracking
