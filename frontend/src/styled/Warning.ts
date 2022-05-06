import styled from 'styled-components'

import {MEDIA_TABLET} from '../constants/Mixin'
import {colors, sizes} from '../constants/Variables'
import {X} from './Base/CloseButton'

export const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: none;
  font-size: ${sizes.xs};
  letter-spacing: 1px;
  background: ${colors.tiffany.i300};
  color: ${colors.white.i100};
  &:hover {
    background: ${colors.tiffany.i500};
  }
  &.selected {
    color: ${colors.white.i100};
    background: ${colors.tiffany.i300};
  }
`
const TextSetting = styled.p`
  line-height: 1.5;
  text-align: center;
  line-height: 1.5;
`
export const Windows = styled.div<{isShow: boolean}>`
  width: 275px;
  height: 380px;
  border-radius: 5px;
  border: 5px solid ${colors.tiffany.i300};
  background: ${colors.white.i100};
  position: absolute;
  z-index: 50;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  ${MEDIA_TABLET} {
    width: 520px;
    height: 370px;
  }
`
export const Img = styled.div`
  background-image: url("/images/warning.svg");
  background-position: center center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  width: 80px;
  height: 80px;
  margin-top: 40px;
  margin-bottom: 30px;
  position: relative;
  ${MEDIA_TABLET} {
    width: 100px;
    height: 100px;
  }
`
export const Title = styled(TextSetting)`
  font-size: ${sizes.s};
  font-weight: 900;
  color: ${colors.tiffany.i400};
  margin: 0 30px;
  ${MEDIA_TABLET} {
    font-size: ${sizes.m};
  }
`
export const Details = styled(TextSetting)`
  font-size: ${sizes.xs};
  margin: 30px;
  color: ${colors.gray.i300};
  ${MEDIA_TABLET} {
    font-size: ${sizes.s};
  }
`
export const ButtonWrap = styled.div`
  width: 170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const GoToLogin = styled(Button)``
export const Understood = styled(Button)`
  border: 1px solid ${colors.gray.i700};
  background: ${colors.white.i100};
  color: ${colors.gray.i400};
  &:hover {
    background: ${colors.white.i100};
    border: 1px solid ${colors.tiffany.i300};
  }
`
export const Closed = styled(X)`
  width: 22px;
  height: 22px;
  position: absolute;
  left: 140px;
  bottom: 80px;
  ${MEDIA_TABLET} {
    width: 30px;
    height: 30px;
    left: 260px;
    bottom: 90px;
  }
`
