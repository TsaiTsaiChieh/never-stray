import {PetRef} from '../../constants/EnumType'
import {
  AdoptedImg,
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
            <PawImg />
            <Avatar image={pet.image[0].replace('http:', '')} />
            <Title>
              {pet.ref === PetRef.MAP ?
                pet.name.substring(0, 8) :
                `${pet.color}${petKindConverter(pet.kind)}`}
              <AdoptedImg status={pet.status} />
            </Title>
            <SexAgeWrap>
              <Sex sex={pet.sex}>{petSexConverter(pet.sex)}</Sex>
              <VerticalLine />
              <Age>{petAgeConverter(pet.age)}</Age>
            </SexAgeWrap>
          </ImgWrap>
        </Container>
      </ProfileWrap>
    </OuterHoverWrap >
  )
}

export default Profile
