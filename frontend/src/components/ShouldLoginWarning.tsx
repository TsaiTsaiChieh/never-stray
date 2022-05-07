import {useAppDispatch, useAppSelector} from '../store/hooks'
import {updateShouldLoginWarningIsShow} from '../store/reducers/uiSlice'
import {
  ButtonWrap, Closed, Details, GoToLogin, Img, Title, Understood, Windows,
} from '../styled/Warning'
import GoogleLoginBtn from './GoogleLoginBtn'

interface Props {
  featureName?: string
}
const ShouldLoginWarning = ({featureName}: Props) => {
  const dispatch = useAppDispatch()
  const {shouldLoginWarningIsShow} = useAppSelector((state) => state.ui)

  return (
    <Windows isShow={shouldLoginWarningIsShow}>
      <Img>
        <Closed
          onClick={() => dispatch(updateShouldLoginWarningIsShow(false))}
        />
      </Img>
      <Title>抱歉，此功能需要 Google 登入才能使用</Title>
      <Details>
        {featureName ? `${featureName}功能` : '此功能'}需要 Google
        登入才能使用，建議您前往登入
      </Details>
      <ButtonWrap>
        <GoogleLoginBtn
          Component={GoToLogin}
          buttonName='我要登入'
        />
        <Understood
          onClick={() => dispatch(updateShouldLoginWarningIsShow(false))}
        >
          已瞭解
        </Understood>
      </ButtonWrap>
    </Windows>
  )
}

export default ShouldLoginWarning
