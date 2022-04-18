import {PetRef} from '../../constants/EnumType'
import {
  AccessNumber,
  Container,
  Description,
  DescriptionContainer,
  DescriptionTitle,
  Title,
  UpdateTime,
} from '../../styled/PetProfile/Details'
import Feature from './Feature'

interface Props {
  pet: IPet;
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
    </Container>
  )
}

export default Details
