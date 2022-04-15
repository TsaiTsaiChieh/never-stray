import styled from 'styled-components'

import {MEDIA_DESKTOP, MEDIA_TABLET} from '../constants/Mixin'
import {colors, filters, sizes} from '../constants/Variables'

export const StyledHeader = styled.div`
  width: 100%;
  align-items: center;
  border-bottom: 4px solid ${colors.tiffany.i300};
  display: flex;
  justify-content: center;
  cursor: pointer;
  ${MEDIA_TABLET} {
    padding-top: 4.5px;
    padding-bottom: 4.5px;
    border-bottom: 5px solid ${colors.tiffany.i300};
  }
  ${MEDIA_DESKTOP} {
    justify-content: flex-start;
  }
`
export const LogoGroup = styled.div`
  display: flex;
  margin: 3px 0 3px 0;
  justify-content: space-around;
  ${MEDIA_TABLET} {
    margin: 3px 0 3px 0;
  }
  ${MEDIA_DESKTOP} {
    margin-left: 15%;
  }
`
export const Logo = styled.img`
  width:40px ;
  height: 40px;
  filter: ${filters.tiffany.i300};
  content: url('/images/logo-small.svg' );

`
export const Slogan = styled.div`
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 110px;
  height: auto;
  ${MEDIA_TABLET} {
    width: 160px;
  }
`
export const SloganCh = styled.h3`
  font-weight: bold;
  font-size: ${sizes.s};
  letter-spacing: 3px;
  color: ${colors.tiffany.i300};
  ${MEDIA_TABLET} {
    font-size: ${sizes.l};
  }
`
export const SloganEn = styled.h3`
  letter-spacing: 0.09em;
  color: ${colors.gray.i200};
  font-size: 12px;
  ${MEDIA_TABLET} {
    letter-spacing: 0.12em;
    font-size: 14px;
  }
`
