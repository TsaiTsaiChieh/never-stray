import styled from 'styled-components'

import {MEDIA_TABLET} from '../../constants/Mixin'
import {colors} from '../../constants/Variables'
import {Button, Selector} from './SearchBoard'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 60px;
  box-shadow: 0px 0 8px ${colors.gray.t100};
  border-radius: 5px;
  margin-top: 30px;
  ${MEDIA_TABLET} {
    justify-content: flex-start;
  }
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
  width: 135px;
  ${MEDIA_TABLET} {
    width: 180px;
    margin-left: 20px;
  }
`

export const AgeOrderSelect = styled(Selector)`
  width: 135px;
  ${MEDIA_TABLET} {
    width: 180px;
    margin-left: 20px;
  }
`
export const TrackingFilterBtn = styled(Button)`
  width: 135px;
  height: 38px;
  letter-spacing: 1.5px;
  ${MEDIA_TABLET} {
    width: 180px;
    margin-left: 20px;
  }
  &.selected:hover {
    border: none;
    background: ${colors.tiffany.i500};
  }
`
