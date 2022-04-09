import styled from 'styled-components'

import {colors} from '../constants/Variables'

export const StyledMask = styled.div<{isShow: boolean}>`
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${colors.tiffany.i600};
  opacity: 0.5;
`
