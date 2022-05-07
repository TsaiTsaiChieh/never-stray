import {api} from '../services/api'
import {useAppDispatch, useAppSelector} from '../store/hooks'
import {logout} from '../store/reducers/authSlice'
import {Container, LoginBtn, UserAvatar} from '../styled/Login'
import GoogleLoginBtn from './GoogleLoginBtn'

const Login = () => {
  const {isLogin, userData} = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const {filters} = useAppSelector((state) => state.petList)

  const handleLogout = () => {
    dispatch(logout())
    // force re-fetches the pet data for tracking state
    dispatch(
      api.endpoints.getPetsByFilters.initiate(
        {...filters},
        {forceRefetch: true},
      ),
    )
  }

  return (
    <Container>
      <UserAvatar picture={userData ? userData.picture : undefined} />
      {isLogin ? (
        <LoginBtn onClick={handleLogout}>登出</LoginBtn>
      ) : (
        <GoogleLoginBtn Component={LoginBtn} buttonName='登入' />
      )}
    </Container>
  )
}

export default Login
