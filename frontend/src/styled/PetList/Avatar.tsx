import styled from 'styled-components'

import {MEDIA_TABLET} from '../../constants/Mixin'

export const StyledAvatar = styled.div`
  cursor: pointer;
  position: relative;
  object-fit: cover;
  width: 9rem;
  height: 8.5rem;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-mask: url("/images/PetList/pet-mask.svg") no-repeat center center;
  mask: url("/images/PetList/pet-mask.svg") no-repeat center center;
  -webkit-mask-size: contain;
  mask-size: contain;
  ${MEDIA_TABLET} {
    width: 10rem;
    height: 9.5rem;
  }
`
