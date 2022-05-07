import {useNavigate} from 'react-router-dom'

import {
  Logo,
  LogoGroup,
  Slogan,
  SloganCh,
  SloganEn,
  StyledHeader,
} from '../styled/Header'
import Login from './Login'

const Header = () => {
  const navigate = useNavigate()

  const toMainPage = () => {
    navigate('/')
  }

  return (
    <StyledHeader>
      <LogoGroup onClick={toMainPage}>
        <Logo />
        <Slogan>
          <SloganCh>讓愛不流浪</SloganCh>
          <SloganEn>Never Stray</SloganEn>
        </Slogan>
      </LogoGroup>
      <Login />
    </StyledHeader>
  )
}

export default Header
