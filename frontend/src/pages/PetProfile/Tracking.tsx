import {isDesktop, isTablet} from 'react-device-detect'

import {TrackingBtn, TrackingIcon} from '../../styled/PetProfile/Details'

interface Props {
  tracking: boolean
}
const Tracking = ({tracking}: Props) => {
  return (
    <TrackingBtn>
      <TrackingIcon tracking={tracking} />
      {isTablet || isDesktop ?
        `${tracking ? '已加入小窩' : '加入我的小窩'} ` :
        ''}
    </TrackingBtn>
  )
}

export default Tracking
