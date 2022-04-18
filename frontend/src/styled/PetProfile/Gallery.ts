import styled from 'styled-components'

import {MEDIA_DESKTOP, MEDIA_TABLET} from '../../constants/Mixin'
import {AdoptedImg} from '../PetList/Profile'

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  ${MEDIA_TABLET} {
    flex-direction: row;
    justify-content: center;
  }
  ${MEDIA_DESKTOP} {
    width: 400px;
    justify-content: start;
  }
`
export const AdoptedImgInProfile = styled(AdoptedImg)`
  width: 100px;
  height: 100px;
  top: -10px;
  left: -20px;
  ${MEDIA_TABLET} {
    width: 140px;
    height: 140px;
    top: 10px;
    left: -50px;
  }
  ${MEDIA_DESKTOP} {
    width: 168px;
    height: 168px;
    top: 0px;
    left: -65px;
  }
`
