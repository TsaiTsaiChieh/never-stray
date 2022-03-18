import {
  Logo,
  LogoGroup,
  Slogan,
  SloganCh,
  SloganEn,
  StyledHeader,
} from '../styled/Header'

const Header = () => {
  return (
    <StyledHeader>
      <LogoGroup>
        <Logo src="images/logo-small.svg" />
        <Slogan>
          <SloganCh>讓愛不流浪</SloganCh>
          <SloganEn>Never Stray</SloganEn>
        </Slogan>
      </LogoGroup>
    </StyledHeader>
  )
}

export default Header
