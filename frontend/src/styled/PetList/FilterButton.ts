import styled from 'styled-components'

import {MEDIA_DESKTOP, MEDIA_TABLET} from '../../constants/Mixin'
import {colors, sizes} from '../../constants/Variables'
import {FiFilter} from 'react-icons/fi'

export const FilterContainer = styled.div<{isShow: boolean}>`
  display: ${(props) => props.isShow ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 16px;
  left: 6%;
  cursor: pointer;
  ${MEDIA_TABLET} {
    top: 22px;
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
  margin-left: 2px;
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
export const Icon = styled(FiFilter)`
  width: 18px;
  height: 16px;
  color: ${colors.tiffany.i300};
  ${MEDIA_DESKTOP} {
    color: ${colors.gray.i100}
  }
`
