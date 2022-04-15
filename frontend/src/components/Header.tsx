import {useNavigate} from 'react-router-dom'

import {
  Logo,
  LogoGroup,
  Slogan,
  SloganCh,
  SloganEn,
  StyledHeader,
} from '../styled/Header'

const Header = () => {
  const navigate = useNavigate()

  const toMainPage = () => {
    navigate('/')
  }

  return (
    <StyledHeader onClick={toMainPage}>
      <LogoGroup>
        <Logo />
        <Slogan>
          <SloganCh>讓愛不流浪</SloganCh>
          <SloganEn>Never Stray</SloganEn>
        </Slogan>
      </LogoGroup>
    </StyledHeader>
  )
}

export default Header
