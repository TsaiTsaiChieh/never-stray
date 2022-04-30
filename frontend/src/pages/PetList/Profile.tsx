import {useNavigate} from 'react-router-dom'

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
} from '../../utils/value-converter'
import Avatar from './Avatar'
import Tracking from './Tracking'

interface Props {
  pet: IPet
}
const Profile = ({pet}: Props) => {
  const navigate = useNavigate()
  const toProfile = () => {
    navigate(`/profile/${pet.id}`)
  }

  return (
    <OuterHoverWrap>
      <ProfileWrap>
        <Container>
          <ImgWrap>
            <Tracking id={pet.id} tracking={pet.tracking} />
            <PawImg />
            <Avatar image={pet.image[0]} />
            <Title>
              {pet.ref === PetRef.MAP ?
                pet.name.substring(0, 8) :
                `${pet.color}${petKindConverter(pet.kind)}`}
              <AdoptedImg status={pet.status} />
            </Title>
            <SexAgeWrap onClick={toProfile}>
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
