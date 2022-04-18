import {
  Container,
  Frame,
  Sex,
  Title,
  Value,
} from '../../styled/PetProfile/Feature'
import {
  ligationConverter,
  petAgeConverter,
} from '../../utils/value-converter'

interface Props {
  sex: PetSexType;
  age: PetAgeType;
  city: string;
  ligation: TernaryType;
}
const Feature = ({sex, age, city, ligation}: Props) => {
  return (
    <Container>
      <Frame>
        <Title>性別</Title>
        <Sex sex={sex}></Sex>
      </Frame>
      <Frame>
        <Title>年紀</Title>
        <Value>{petAgeConverter(age)}</Value>
      </Frame>
      <Frame>
        <Title>地區</Title>
        <Value>{city}</Value>
      </Frame>
      <Frame>
        <Title>結紮</Title>
        <Value>{ligationConverter(ligation)}</Value>
      </Frame>
    </Container>
  )
}

export default Feature
