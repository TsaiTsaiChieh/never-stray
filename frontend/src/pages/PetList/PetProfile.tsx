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
const PetProfile = ({pet}: Props) => {
  return (
    <ProfileWrap>
      <Container>
        <ImgWrap>
          <PawImg src="/images/PetList/paw.svg" />
          <PetImg
            image={pet.image[0]}
            style={{
              backgroundImage: `url(${pet.image[0] ?
                pet.image[0] : '/images/PetList/pet-mask.svg'})`,
            }} />
          <Title>
            {pet.color}
            {petKindConverter(pet.kind)}
          </Title>
          <SexAgeWrap>
            <Sex className="pet-sex" sex={pet.sex}>
              {petSexConverter(pet.sex)}
            </Sex>
            <VerticalLine className="pet-vl" />
            <Age className="pet-age">{petAgeConverter(pet.age)}</Age>
          </SexAgeWrap>
        </ImgWrap>
      </Container>
    </ProfileWrap>
  )
}

export default PetProfile
