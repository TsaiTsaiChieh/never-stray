import styled from 'styled-components'

import {MEDIA_DESKTOP} from '../../constants/Mixin'
import {colors, filters, sizes} from '../../constants/Variables'

export const FilterContainer = styled.div`
  display: flex;
  ${MEDIA_DESKTOP} {
    position: absolute;
    top: 30px;
    left: 20px;
  }
`
export const Name = styled.div`
  margin-left: 7px;
  font-size: ${sizes.s};
  &::after {
    content: "篩選";
  }
  ${MEDIA_DESKTOP} {
    color: ${colors.gray.i300};
  }
`
export const Icon = styled.img`
  width: 18px;
  height: 16px;
  content: url("/images/filter.svg");
  ${MEDIA_DESKTOP} {
    filter: ${filters.white.i200};
  }
`
