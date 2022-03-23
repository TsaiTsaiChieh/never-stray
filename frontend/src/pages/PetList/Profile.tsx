import {
  Age,
  Container,
  ImgWrap,
  OuterHoverWrap,
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
    <OuterHoverWrap>
      <ProfileWrap id="ProfileWrap">
        <Container id="Container">
          <ImgWrap id="ImgWrap">
            <PawImg id="PawImg" src="/images/PetList/paw.svg" />
            <Avatar image={pet.image[0]} />
            <Title>
              {pet.color}
              {petKindConverter(pet.kind)}
            </Title>
            <SexAgeWrap id="SexAgeWrap">
              <Sex id="Sex" sex={pet.sex}>{petSexConverter(pet.sex)}</Sex>
              <VerticalLine id="VerticalLine" />
              <Age id="Age">{petAgeConverter(pet.age)}</Age>
            </SexAgeWrap>
          </ImgWrap>
        </Container>
      </ProfileWrap>
    </OuterHoverWrap>
  )
}

export default Profile
