import styled from 'styled-components'

import {MEDIA_DESKTOP, MEDIA_TABLET} from '../../constants/Mixin'
import {colors, filters, sizes} from '../../constants/Variables'

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  left: 16px;
  cursor: pointer;
  ${MEDIA_TABLET} {
    top: 26px;
    left: 26px;
  }
  ${MEDIA_DESKTOP} {
    position: absolute;
    top: 30px;
    left: 20px;
    cursor: auto;
  }
`
export const Name = styled.div`
  margin-left: 7px;
  font-size: ${sizes.s};
  color: ${colors.tiffany.i300};
  letter-spacing: 1px;
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
  filter: ${filters.tiffany.i300};
  ${MEDIA_DESKTOP} {
    filter: ${filters.gray.i100};
  }
`
