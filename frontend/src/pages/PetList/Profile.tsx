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
} from '../../styled/PetList/Profile'
import useProgressiveImage from '../../utils/useProgressiveImage'
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

export default Profile
