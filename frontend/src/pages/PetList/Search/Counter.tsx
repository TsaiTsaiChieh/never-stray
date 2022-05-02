import {isMobile, isTablet} from 'react-device-detect'
import {useAppDispatch} from '../../../store/hooks'
import {closeSearchBoard} from '../../../store/reducers/uiSlice'

import {
  CounterBtn,
  CounterOuter,
  CounterValue,
} from '../../../styled/PetList/SearchBoard'

interface Props {
  count?: number;
}
const Counter = ({count}: Props) => {
  const dispatch = useAppDispatch()
  const isMobileAndIsNotTablet = isMobile && !isTablet

  return (
    <CounterOuter>
      {isMobileAndIsNotTablet ? (
        <CounterBtn onClick={() => dispatch(closeSearchBoard())}>
          顯示 {count ? count : '??'} 項結果
        </CounterBtn>
      ) : (
        <CounterValue>{count ? count : '??'}</CounterValue>
      )}
      {isMobileAndIsNotTablet ? '' : '項結果'}
    </CounterOuter>
  )
}

export default Counter
