import {useEffect, useState} from 'react'

import {
  Age,
  Container,
  ImgWrap,
  PawImg,
  PetImg,
  ProfileWrap,
  Sex,
  SexAgeWrap,
  Title,
  VerticalLine,
} from '../../styled/PetList/PetProfile'
import {
  petAgeConverter,
  petKindConverter,
  petSexConverter,
} from '../../utils/value-convert'

interface Props {
  pet: PetDataType;
}
const Profile = ({pet}: Props) => {
  const loaded = useProgressiveImage(pet.image[0])
  return (
    <ProfileWrap>
      <Container>
        <ImgWrap>
          <PawImg src="/images/PetList/paw.svg" />
          <PetImg
            style={{
              backgroundImage: `url(${loaded || '/images/PetList/pet-mask.svg'
                })`,
            }}
          />
          <Title>
            {pet.color}
            {petKindConverter(pet.kind)}
          </Title>
          <SexAgeWrap>
            <Sex sex={pet.sex}>{petSexConverter(pet.sex)}</Sex>
            <VerticalLine />
            <Age>{petAgeConverter(pet.age)}</Age>
          </SexAgeWrap>
        </ImgWrap>
      </Container>
    </ProfileWrap>
  )
}

const useProgressiveImage = (src: string) => {
  const [sourceLoaded, setSourceLoaded] = useState('')

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setSourceLoaded(src)
  }, [src])

  return sourceLoaded
}

export default Profile
