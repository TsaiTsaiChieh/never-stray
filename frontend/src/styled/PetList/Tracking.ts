import styled from 'styled-components'

import {MEDIA_TABLET} from '../../constants/Mixin'

export const TrackingOrNot = styled.img<{tracking: boolean}>`
  display: none;
  position: absolute;
  margin: auto;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 22px;
  cursor: pointer;
  content: ${(props) =>
    props.tracking ?
      'url(/images/PetList/tracking.svg)' :
      'url(/images/PetList/untracking.svg)'};
  ${MEDIA_TABLET} {
    width: 30px;
  }
`
