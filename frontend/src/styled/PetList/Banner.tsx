import styled from 'styled-components'
import {MEDIA_TABLET} from '../../constants/Mixin'

export const StyledBanner = styled.img`
  display: block;
  margin: auto;
  content: url("/images/PetList/banner-mobile.png");
  width: 90%;
  ${MEDIA_TABLET} {
    content: url("/images/PetList/banner-tablet.png");
    width: 720px;
    height: 145.24px;
  }
`
