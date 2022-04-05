import {PetRef} from '../../constants/EnumType'
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
  pet: IPet;
}
const Profile = ({pet}: Props) => {
  return (
    <OuterHoverWrap>
      <ProfileWrap>
        <Container>
          <ImgWrap>
            <PawImg src='/images/PetList/paw.svg' />
            <Avatar image={pet.image[0]} />
            <Title>
              {pet.ref === PetRef.MAP ?
                pet.name.substring(0, 8) :
                `${pet.color}${petKindConverter(pet.kind)}`}
            </Title>
            <SexAgeWrap>
              <Sex sex={pet.sex}>{petSexConverter(pet.sex)}</Sex>
              <VerticalLine />
              <Age>{petAgeConverter(pet.age)}</Age>
            </SexAgeWrap>
          </ImgWrap>
        </Container>
      </ProfileWrap>
    </OuterHoverWrap>
  )
}

export default Profile
