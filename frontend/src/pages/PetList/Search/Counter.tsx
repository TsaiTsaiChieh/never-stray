import {
  CounterOuter,
  CounterValue,
} from '../../../styled/PetList/SearchBoard'

interface Props {
  count?: number;
}
const Counter = ({count}: Props) => {
  return (
    <CounterOuter>
      有<CounterValue>{count}</CounterValue>項結果
    </CounterOuter>
  )
}

export default Counter
