import {CSSProperties} from 'react'

const NotFound = () => {
  const style: CSSProperties = {
    content: 'url(/images/PetList/not-found.png)',
  }

  return (
    <img style={style} />
  )
}

export default NotFound
