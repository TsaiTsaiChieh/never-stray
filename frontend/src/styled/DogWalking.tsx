import styled from 'styled-components'

import {MEDIA_TABLET} from '../constants/Mixin'
import {colors} from '../constants/Variables'

export const Wrap = styled.div`
  background-color: ${colors.tiffany.i300};
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
`
export const StyledDogWalking = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  ${MEDIA_TABLET} {
    width: 400px;
    height: 400px;
  }
`
