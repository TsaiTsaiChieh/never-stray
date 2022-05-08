import {PetRef} from '../../constants/EnumType'
import {useAppDispatch} from '../../store/hooks'
import {updateContactUsIsShow} from '../../store/reducers/uiSlice'
import {
  Closed,
  ContactWrap,
  Container,
  Content,
  Link,
  Title,
  Understood,
  Warning,
} from '../../styled/PetProfile/ContactUs'

interface Props {
  pet: IPet
  isShow: boolean
}
const ContactUs = ({pet, isShow}: Props) => {
  const dispatch = useAppDispatch()

  const closeContactUs = () => {
    dispatch(updateContactUsIsShow(false))
  }

  return (
    <Container isShow={isShow}>
      <ContactWrap>
        <Closed onClick={() => closeContactUs()} />
        <Title>聯絡人</Title>
        <Content>
          {pet.ref === PetRef.GOV ? pet.shelter_name : pet.contact}
        </Content>
        <Title>聯絡方式</Title>
        <Content>{pet.phone}</Content>
        <Title>鏈結</Title>
        <Link
          target='_blank'
          href={
            pet.ref === PetRef.GOV ?
              `https://asms.coa.gov.tw/Amlapp/App/AnnounceList.aspx?Id=${pet.sub_id}&AcceptNum=${pet.accept_num}&PageType=Announce` :
              `http://www.meetpets.org.tw/content/${pet.sub_id}`
          }
        >
          {pet.ref === PetRef.GOV ? '全國動物收容系統' : '台灣認養地圖'}
        </Link>
        <Title>提醒</Title>
        <Warning>
          本網站僅供搜尋使用，若飼主確實要認領養，請點選上述的鏈結，至原始資料的來源網站完成後續認領養的手續
        </Warning>
        <Understood onClick={() => closeContactUs()}>已瞭解並關閉</Understood>
      </ContactWrap>
    </Container>
  )
}

export default ContactUs
