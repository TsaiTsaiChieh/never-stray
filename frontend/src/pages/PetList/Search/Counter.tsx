import {isMobile, isTablet} from 'react-device-detect'

import {
  CounterBtn,
  CounterOuter,
  CounterValue,
} from '../../../styled/PetList/SearchBoard'

interface Props {
  count?: number
}
const Counter = ({count}: Props) => {
  const isMobileAndIsNotTablet = isMobile && !isTablet

  return (
    <CounterOuter>
      {isMobileAndIsNotTablet ? (
        <CounterBtn>顯示 {count ? count : '??'} 項結果</CounterBtn>
      ) : (
        <CounterValue>{count ? count : '??'}</CounterValue>
      )}
      {isMobileAndIsNotTablet ? '' : '項結果'}
    </CounterOuter>
  )
}

export default Counter
