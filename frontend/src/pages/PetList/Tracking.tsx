import {useState} from 'react'

import {useAddTrackingMutation, useRemoveTrackingMutation} from '../../api/pets'
import {useAppSelector} from '../../store/hooks'
import {TrackingOrNot} from '../../styled/PetList/Tracking'

interface Props {
  id: number
  tracking: boolean
}
const Tracking = ({id, tracking}: Props) => {
  const [trackingState, setTrackingState] = useState<boolean>(tracking)
  const {isLogin} = useAppSelector((state) => state.auth)
  const [addTracking] = useAddTrackingMutation()
  const [removeTracking] = useRemoveTrackingMutation()

  const toggleTracking = () => {
    if (!isLogin) return
    setTrackingState(!trackingState)
    if (trackingState) removeTracking({pet_id: id})
    else addTracking({pet_id: id})
  }

  return (
    <TrackingOrNot onClick={() => toggleTracking()} tracking={trackingState} />
  )
}

export default Tracking
