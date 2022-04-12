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
