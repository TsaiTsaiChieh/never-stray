import styled from 'styled-components'

import {MEDIA_TABLET} from '../../constants/Mixin'
import {colors} from '../../constants/Variables'
import {Selector} from './SearchBoard'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  box-shadow: 0px 0 8px ${colors.gray.t100};
  border-radius: 5px;
  margin-top: 30px;
`
export const Title = styled.div`
  display: none;
  color: ${colors.gray.i400};
  margin-left: 30px;
  &::after {
    content: "排序";
  }
  ${MEDIA_TABLET} {
    display: block;
  }
`

export const UpdateTimeOrderSelector = styled(Selector)`
  margin-left: 20px;
  width: 135px;
  ${MEDIA_TABLET} {
    width: 180px;
  }
`

export const AgeOrderSelect = styled(Selector)`
  margin-left: 20px;
  width: 135px;
  ${MEDIA_TABLET} {
    width: 180px;
  }
`
