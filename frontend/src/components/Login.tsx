import GoogleLogin from 'react-google-login'

import {Container, UserAvatar, UserName} from '../styled/Login'

const responseGoogle = (response: any) => {
  console.log(response)
}
const Login = () => {
  return (
    <Container>
      <UserAvatar />
      <GoogleLogin
        render={(renderProps) => (
          <UserName onClick={renderProps.onClick}>登入</UserName>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
      />
    </Container >
  )
}

export default Login
