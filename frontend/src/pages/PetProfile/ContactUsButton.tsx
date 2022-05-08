import {useAppDispatch} from '../../store/hooks'
import {updateContactUsIsShow} from '../../store/reducers/uiSlice'
import {ContactUsBtn} from '../../styled/PetProfile/ContactUs'

interface Props {
  status: PetStatusType
}
const ContactUsButton = ({status}: Props) => {
  const dispatch = useAppDispatch()
  const openContactUs = () => {
    dispatch(updateContactUsIsShow(true))
  }
  return (
    <ContactUsBtn status={status} onClick={() => openContactUs()}>
      聯絡我們
    </ContactUsBtn>
  )
}

export default ContactUsButton
