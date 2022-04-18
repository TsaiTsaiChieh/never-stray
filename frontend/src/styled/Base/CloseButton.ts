import styled from 'styled-components'

import {colors} from '../../constants/Variables'

export const CloseButton = styled.div`
  position: fixed;
  width: 30px;
  height: 30px;
  top: 70px;
  right: 35px;
  z-index: 30;
  cursor: pointer;
  &::after,
  &::before {
    display: inline-block;
    content: "";
    position: absolute;
    width: 100%;
    top: 50%;
    height: 2px;
    border-radius: 2px;
    background: ${colors.tiffany.i300};
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
`
