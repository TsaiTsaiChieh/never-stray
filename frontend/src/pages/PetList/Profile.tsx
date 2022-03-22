import {
  Age,
  Container,
  ImgWrap,
  PawImg,
  ProfileWrap,
  Sex,
  SexAgeWrap,
  Title,
  VerticalLine,
} from '../../styled/PetList/Profile'
import {
  petAgeConverter,
  petKindConverter,
  petSexConverter,
} from '../../utils/value-convert'
import Avatar from './Avatar'

interface Props {
  pet: PetDataType;
}
const Profile = ({pet}: Props) => {
  return (
    <ProfileWrap>
      <Container>
        <ImgWrap>
          <PawImg src="/images/PetList/paw.svg" />
          <Avatar image={pet.image[0]} />
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
