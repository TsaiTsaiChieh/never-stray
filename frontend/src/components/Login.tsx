import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'

import {useGoogleLoginMutation} from '../services/api'
import {useAppDispatch, useAppSelector} from '../store/hooks'
import {logout} from '../store/reducers/authSlice'
import {Container, LoginBtn, UserAvatar} from '../styled/Login'

const Login = () => {
  const {isLogin, userData} = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const [googleLogin] = useGoogleLoginMutation()

  const handleLogin = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    // Callback will return the GoogleAuth object
    if ('tokenId' in res) {
      const tokenId = res.tokenId
      // Carry token to backend
      googleLogin({token: tokenId})
    }
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Container>
      <UserAvatar picture={userData ? userData.picture : undefined} />
      {isLogin ? (
        <LoginBtn onClick={handleLogout}>登出</LoginBtn>
      ) : (
        <GoogleLogin
          render={(renderProps) => (
            <LoginBtn onClick={renderProps.onClick}>登入</LoginBtn>
          )}
          onSuccess={handleLogin}
          // TODO Should add handleFailure function
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
        />
      )}
    </Container>
  )
}

export default Login
