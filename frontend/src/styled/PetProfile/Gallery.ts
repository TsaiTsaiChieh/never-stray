import styled from 'styled-components'

import {MEDIA_DESKTOP, MEDIA_TABLET} from '../../constants/Mixin'
import {colors} from '../../constants/Variables'
import {AdoptedImg} from '../PetList/Profile'

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  align-items: center;
  ${MEDIA_TABLET} {
    flex-direction: row;
  }
`
export const Image = styled.img<{image: string}>`
  width: 50vh;
  height: 50vh;
  content: ${(props) => `url(${props.image})`};
  object-fit: cover;
  border-radius: 13px;
  margin-top: 22px;
  box-shadow: 0px 0px 8px ${colors.gray.t100};
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
