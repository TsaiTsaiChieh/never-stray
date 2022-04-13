import styled from 'styled-components'

import {MEDIA_TABLET} from '../../constants/Mixin'
import {colors} from '../../constants/Variables'

export const StyledAvatar = styled.div<{isLoading: boolean}>`
  cursor: pointer;
  position: relative;
  object-fit: cover;
  width: 7rem;
  height: 6.5rem;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-mask: url("/images/PetList/pet-mask.svg") no-repeat center center;
  mask: url("/images/PetList/pet-mask.svg") no-repeat center center;
  -webkit-mask-size: contain;
  mask-size: contain;
  &::before {
    content: "";
    display: ${(props) => props.isLoading ? 'block' : 'none'};
    position: absolute;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      ${colors.gray.i600} 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }
  ${MEDIA_TABLET} {
    width: 10rem;
    height: 9.5rem;
  }
`
