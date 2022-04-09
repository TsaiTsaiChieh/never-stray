import styled from 'styled-components'
import {MEDIA_TABLET} from '../../constants/Mixin'

export const StyledBanner = styled.img`
  display: block;
  margin: auto;
  content: url("/images/PetList/banner-mobile.png");
  width: 100%;
  ${MEDIA_TABLET} {
    content: url("/images/PetList/banner-tablet.png");
    padding-top: 15px;
  }
`
