import styled from 'styled-components'
import {MEDIA_TABLET} from '../../constants/Mixin'

export const StyledNotFound = styled.img`
  content: url("/images/PetList/not-found.png");
  width: 300px;
  ${MEDIA_TABLET} {
    width: 400px;
  }
`
