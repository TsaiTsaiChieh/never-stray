
import ImageGallery from 'react-image-gallery'
import {
  AdoptedImgInProfile,
  Container,
} from '../../styled/PetProfile/Gallery'

interface Props {
  images: string[]
  status: PetStatusType
}
const Gallery = ({images, status}: Props) => {
  const items: GalleryItemType[] = images.map((ele) => ({
    original: ele ? ele : '/images/PetProfile/no-pic.svg',
    thumbnail: ele ? ele : '/images/PetProfile/no-pic-thumbnail.svg',
  }))

  return (
    <Container>
      <AdoptedImgInProfile status={status} />
      <ImageGallery
        items={items}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </Container>
  )
}

export default Gallery
