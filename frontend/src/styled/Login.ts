import styled from 'styled-components'

import {MEDIA_DESKTOP, MEDIA_TABLET} from '../constants/Mixin'
import {colors, sizes} from '../constants/Variables'

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: auto;
  ${MEDIA_TABLET} {
    right: 70px;
  }
  ${MEDIA_DESKTOP} {
    right: 220px;
  }
`
export const UserName = styled.p`
  color: ${colors.gray.i400};
  font-size: ${sizes.xs};
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 8px;
  ${MEDIA_TABLET} {
    font-size: ${sizes.s};
  }
  ${MEDIA_DESKTOP} {
    font-size: ${sizes.m};
  }
`
export const UserAvatar = styled.div`
  display: flex;
  content: null;
  width: 28px;
  height: 28px;
  border: 2px solid ${colors.tiffany.i300};
  border-radius: 50%;
  ${MEDIA_TABLET} {
    width: 30px;
    height: 30px;
  }
  ${MEDIA_DESKTOP} {
    width: 34px;
    height: 34px;
  }
`
