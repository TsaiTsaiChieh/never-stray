import {useEffect, useState} from 'react'

const useProgressiveImage = (src: string) => {
  const [source, setSource] = useState('')

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSource(src)
  }, [src])

  return source
}

export default useProgressiveImage
