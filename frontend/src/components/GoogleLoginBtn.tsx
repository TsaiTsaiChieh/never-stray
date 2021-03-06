import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import {StyledComponent} from 'styled-components'

import {useGoogleLoginMutation} from '../services/api'
import {useAppDispatch} from '../store/hooks'
import {updateShouldLoginWarningIsShow} from '../store/reducers/uiSlice'

interface Props {
  Component: StyledComponent<'div' | 'button', any, {}, never>
  buttonName: string
}
const GoogleLoginBtn = ({Component, buttonName}: Props) => {
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
      dispatch(updateShouldLoginWarningIsShow(false))
    }
  }
  return (
    <GoogleLogin
      render={(renderProps) => (
        <Component onClick={renderProps.onClick}>{buttonName}</Component>
      )}
      onSuccess={handleLogin}
      // TODO Should add handleFailure function
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
    />
  )
}

export default GoogleLoginBtn
