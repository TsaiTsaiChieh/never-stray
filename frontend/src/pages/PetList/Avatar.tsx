import {CSSProperties, useEffect, useState} from 'react'

import {StyledAvatar} from '../../styled/PetList/Avatar'
import useProgressiveImage from '../../utils/useProgressiveImage'

interface Props {
  image: string
}
const Avatar = ({image}: Props) => {
  const [loading, setLoading] = useState<boolean>(true)
  const loaded = !image ?
    '/images/PetList/dog-no-pic.svg' :
    useProgressiveImage(image)
  useEffect(() => {
    if (loaded) setLoading(false)
  }, [loaded])

  const style: CSSProperties = {
    backgroundImage: `url(${loaded || '/images/PetList/pet-mask.svg'})`,
  }
  return (
    <StyledAvatar isLoading={loading} style={style} />
  )
}

export default Avatar
