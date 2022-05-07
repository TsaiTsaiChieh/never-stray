
import {useAppSelector} from '../store/hooks'
import {StyledMask} from '../styled/Mask'

const Mask = () => {
  const {maskIsShow} = useAppSelector((state) => state.ui)
  return (
    <StyledMask isShow={maskIsShow} />
  )
}

export default Mask
