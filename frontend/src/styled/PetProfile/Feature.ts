import styled from 'styled-components'

import {MEDIA_TABLET} from '../../constants/Mixin'
import {colors, sizes} from '../../constants/Variables'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-top: 10px;
  justify-content: start;
  grid-column-gap: 7px;
  margin: 20px 0 20px;

  ${MEDIA_TABLET} {
    grid-column-gap: 15px;
    margin: 30px 0 30px;
  }
`
export const Frame = styled.div`
  width: 65px;
  height: 70px;
  background-color: ${colors.tiffany.i200};
  border-radius: 5px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  ${MEDIA_TABLET} {
    width: 100px;
    height: 80px;
  }
`
export const Title = styled.h3`
  font-size: ${sizes.s};
  color: ${colors.gray.i700};
  letter-spacing: 1px;
`
export const Value = styled.h3`
  color: ${colors.gray.i300};
  font-size: ${sizes.s};
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 14px;
`
export const Sex = styled.div<{sex: PetSexType}>`
  margin-bottom: 9px;
  &::before {
    display: block;
    width: ${sizes.l};
    height: ${sizes.l};
    content: "";
    background: ${(props) => `url(/images/PetList/pet-sex-${props.sex}.svg)`};
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center center;
    ${MEDIA_TABLET} {
      width: ${sizes.xl};
      height: ${sizes.xl};
    }
  }
`
