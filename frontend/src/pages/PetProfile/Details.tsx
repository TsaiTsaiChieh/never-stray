import {PetRef} from '../../constants/EnumType'
import {
  AccessNumber,
  ButtonContainer,
  Container,
  Description,
  DescriptionContainer,
  DescriptionTitle,
  Status,
  Title,
  UpdateTime,
} from '../../styled/PetProfile/Details'
import ContactUsButton from './ContactUsButton'
import Feature from './Feature'
import Tracking from './Tracking'

interface Props {
  pet: IPet
}
const Details = ({pet}: Props) => {
  const accessNum: string =
    pet.ref === PetRef.GOV ?
      `${pet.sub_id} ${pet.accept_num}`.toString() :
      pet.sub_id.toString()
  return (
    <Container>
      <Title>{pet.ref === PetRef.MAP ? pet.title : pet.shelter_name}</Title>
      <UpdateTime updatedAt={pet.updated_at.substring(0, 10)} />
      <AccessNumber accessNum={accessNum} />
      <Status status={pet.status} />
      <Feature
        sex={pet.sex}
        age={pet.age}
        city={pet.city_name}
        ligation={pet.ligation}
      />
      <DescriptionContainer>
        <DescriptionTitle>介紹描述</DescriptionTitle>
        <Description>{pet.remark}</Description>
      </DescriptionContainer>
      <ButtonContainer>
        <ContactUsButton status={pet.status} />
        <Tracking id={pet.id} tracking={pet.tracking} />
      </ButtonContainer>
    </Container>
  )
}

export default Details
