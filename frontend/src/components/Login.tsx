import {useAppDispatch, useAppSelector} from '../store/hooks'
import {logout} from '../store/reducers/authSlice'
import {Container, LoginBtn, UserAvatar} from '../styled/Login'
import GoogleLoginBtn from './GoogleLoginBtn'

const Login = () => {
  const {isLogin, userData} = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Container>
      <UserAvatar picture={userData ? userData.picture : undefined} />
      {isLogin ? (
        <LoginBtn onClick={handleLogout}>登出</LoginBtn>
      ) : (
        <GoogleLoginBtn
          Component={LoginBtn}
          buttonName='登入'
        />
      )}
    </Container>
  )
}

export default Login
