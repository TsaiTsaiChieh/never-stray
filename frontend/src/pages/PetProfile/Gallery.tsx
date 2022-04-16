
import ImageGallery from 'react-image-gallery'
import {
  AdoptedImgInProfile,
  Container,
  Image,
} from '../../styled/PetProfile/Gallery'

interface Props {
  images: string[]
  status: PetStatusType
}
const Gallery = ({images, status}: Props) => {
  const items: GalleryItemType[] = images.map((ele) => ({
    original: ele,
    thumbnail: ele,
  }))

  return (
    <Container>
      <AdoptedImgInProfile status={status} />
      {images.length === 1 ? <Image image={images[0]} /> : <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={false}
      />}
    </Container>
  )
}

export default Gallery
