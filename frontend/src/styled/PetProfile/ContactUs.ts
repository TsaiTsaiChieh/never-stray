import styled from 'styled-components'

import {PetStatus} from '../../constants/EnumType'
import {MEDIA_DESKTOP, MEDIA_TABLET} from '../../constants/Mixin'
import {colors, sizes} from '../../constants/Variables'
import {X} from '../Base/CloseButton'

export const ContactUsBtn = styled.button<{status: PetStatusType}>`
  width: auto;
  height: 40px;
  flex-grow: 1;
  letter-spacing: 1px;
  font-size: ${sizes.xs};
  background: ${(props) =>
    props.status === PetStatus.ADOPTED ?
      colors.gray.i300 :
      colors.tiffany.i300};
  color: ${colors.white.i100};
  border: none;
  border-radius: 5px;
  &:hover {
    background: ${(props) =>
    props.status === PetStatus.ADOPTED ?
      colors.gray.i400 :
      colors.tiffany.i500};
  }
  ${MEDIA_TABLET} {
    flex-grow: 1;
  }
  ${MEDIA_DESKTOP} {
    max-width: 300px;
  }
`
export const Container = styled.div<{isShow: boolean}>`
  width: 90%;
  height: 50vh;
  overflow-y: scroll;
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  position: absolute;
  margin: auto;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: ${colors.white.i100};
  border-radius: 10px;
  z-index: 30;
  box-shadow: 0px 0px 8px ${colors.gray.t100};
  ${MEDIA_TABLET} {
    width: 680px;
    height: 40vh;
    max-height: 400px;
  }
  ${MEDIA_DESKTOP} {
    width: 680px;
    max-height: 400px;
  }
`
export const ContactWrap = styled.div`
  margin: 30px 24px;
  font-size: ${sizes.s};
  position: relative;
`
export const Title = styled.h3`
  color: ${colors.gray.i100};
  margin-top: 8px;
  margin-bottom: 8px;
`
export const Content = styled.p`
  color: ${colors.gray.i400};
  line-height: 1.5;
`
export const Link = styled.a`
  color: ${colors.tiffany.i300};
`
export const Warning = styled.p`
  color: ${colors.red.i100};
  font-size: ${sizes.xs};
  line-height: 1.5;
  position: relative;
`
export const Understood = styled.button`
  width: 40vw;
  height: 40px;
  border: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  letter-spacing: 1px;
  background: ${colors.tiffany.i300};
  color: ${colors.white.i100};
  border-radius: 5px;
  font-size: ${sizes.s};
  &:hover {
    background: ${colors.tiffany.i500};
  }
  ${MEDIA_TABLET} {
    width: 300px;
  }
`
export const Closed = styled(X)`
  width: 22px;
  height: 22px;
  right: 10px;
  position: absolute;
`
