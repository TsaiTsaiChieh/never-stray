import {useEffect, useState} from 'react'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'

import {useGoogleLoginMutation} from '../api/auth'
import {Container, LoginBtn, UserAvatar} from '../styled/Login'

const Login = () => {
  const [googleLogin, {data, isSuccess}] = useGoogleLoginMutation()
  const [loginData, setLoginData] = useState<UserInfoType | undefined>(
    localStorage.getItem('loginData') ?
      JSON.parse(localStorage.getItem('loginData')!) :
      undefined,
  )
  useEffect(() => {
    if (isSuccess) {
      setLoginData(data!)
      localStorage.setItem('loginData', JSON.stringify(data))
    }
  }, [isSuccess])

  const handleLogin = (
    res: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => {
    if ('tokenId' in res) {
      const tokenId = res.tokenId
      googleLogin({token: tokenId})
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('loginData')
    setLoginData(undefined)
  }

  return (
    <Container>
      <UserAvatar picture={loginData ? loginData.picture : undefined} />
      {loginData ? (
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
