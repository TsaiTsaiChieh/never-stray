
import {useAppSelector} from '../store/hooks'
import {StyledMask} from '../styled/Mask'

const Mask = () => {
  const {searchMaskIsShow} = useAppSelector((state) => state.ui)
  return (
    <StyledMask isShow={searchMaskIsShow} />
  )
}

export default Mask
