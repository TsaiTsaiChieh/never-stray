
import {CSSProperties} from 'react'
import {StyledAvatar} from '../../styled/PetList/Avatar'
import useProgressiveImage from '../../utils/useProgressiveImage'

interface Props {
  image: string
}
const Avatar = ({image}: Props) => {
  const loaded = useProgressiveImage(image)

  const style: CSSProperties = {
    backgroundImage: `url(${loaded || '/images/PetList/pet-mask.svg'})`,
  }
  return (
    <StyledAvatar style={style} />
  )
}

export default Avatar
