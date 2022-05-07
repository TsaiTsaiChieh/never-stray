import {useEffect} from 'react'
import {isDesktop, isTablet} from 'react-device-detect'

import {
  api,
  useAddTrackingMutation,
  useRemoveTrackingMutation,
} from '../../services/api'
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {updateShouldLoginWarningIsShow} from '../../store/reducers/uiSlice'
import {TrackingBtn, TrackingIcon} from '../../styled/PetProfile/Details'

interface Props {
  id: number
  tracking: boolean
}
const Tracking = ({id, tracking}: Props) => {
  const {isLogin} = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const [removeTracking] = useRemoveTrackingMutation()
  const [addTracking] = useAddTrackingMutation()

  useEffect(() => {
    // force re-fetch when isLogin state changing
    dispatch(
      api.endpoints.getPetById.initiate(id.toString(), {forceRefetch: true}),
    )
  }, [isLogin])

  const toggleTracking = () => {
    if (!isLogin) return dispatch(updateShouldLoginWarningIsShow(true))
    if (tracking) removeTracking({pet_id: id})
    else addTracking({pet_id: id})
  }

  return (
    <TrackingBtn onClick={() => toggleTracking()}>
      <TrackingIcon tracking={tracking} />
      {isTablet || isDesktop ?
        `${tracking ? '已加入小窩' : '加入我的小窩'} ` :
        ''}
    </TrackingBtn>
  )
}

export default Tracking
