import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'

import {useGoogleLoginMutation} from '../services/api'
import {useAppDispatch, useAppSelector} from '../store/hooks'
import {updateShouldLoginWarningIsShow} from '../store/reducers/uiSlice'
import {
  ButtonWrap,
  Closed,
  Details,
  GoToLogin,
  Img,
  Title,
  Understood,
  Windows,
} from '../styled/Warning'

interface Props {
  featureName?: string
}
const ShouldLoginWarning = ({featureName}: Props) => {
  const dispatch = useAppDispatch()
  const {shouldLoginWarningIsShow} = useAppSelector((state) => state.ui)
  const [googleLogin] = useGoogleLoginMutation()

  const handleLogin = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    if ('tokenId' in res) {
      const tokenId = res.tokenId
      googleLogin({token: tokenId})
      dispatch(updateShouldLoginWarningIsShow(false))
    }
  }

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
        {/* <GoToLogin onClick=>我要登入</GoToLogin> */}
        <GoogleLogin
          render={(renderProps) => (
            <GoToLogin onClick={renderProps.onClick}>我要登入</GoToLogin>
          )}
          onSuccess={handleLogin}
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
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
