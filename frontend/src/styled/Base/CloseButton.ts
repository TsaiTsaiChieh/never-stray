import styled from 'styled-components'

import {colors, filters} from '../../constants/Variables'

export const CloseButton = styled.div`
  position: fixed;
  width: 15px;
  height: 15px;
  top: 10px;
  right: 1.5rem;
  z-index: 41;
  cursor: pointer;
  &::after,
  &::before {
    display: inline-block;
    content: "";
    position: absolute;
    width: 15px;
    top: 10px;
    height: 2px;
    border-radius: 2px;
    background: ${colors.tiffany.i300};
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
`
export const X = styled.img`
  content: url("/images/x.svg");
  filter: ${filters.gray.i300};
  &:hover {
    filter: ${filters.tiffany.i400};
  }
`
