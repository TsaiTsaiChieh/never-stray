import styled from 'styled-components'

import {MEDIA_TABLET} from '../../constants/Mixin'
import {colors, filters, sizes} from '../../constants/Variables'

export const ProfileWrap = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  box-shadow: 0px 0px 8px ${colors.gray.t100};
  border-radius: 5px;
`
export const Container = styled.div`
  display: flex;
  height: 11rem;
  flex-direction: column;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  ${MEDIA_TABLET} {
    height: 11.6rem;
    padding: 1.9rem;
  }
`
export const ImgWrap = styled.div`
  position: relative;
  bottom: 8rem;
  ${MEDIA_TABLET} {
    bottom: 10.2rem;
  }
`
export const PawImg = styled.img`
  filter: ${filters.tiffany.i300};
  position: relative;
  top: 2.5rem;
  right: 0.6rem;
  ${MEDIA_TABLET} {
    top: 2.7rem;
    width: 90%;
  }
`
export const PetImg = styled.div<{image: string}>`
  cursor: pointer;
  position: relative;
  object-fit: cover;
  width: 9rem;
  height: 8.5rem;
  border-radius: 10px;
  filter: ${(props) => (props.image ? '' : filters.tiffany.i300)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-mask: url("/images/PetList/pet-mask.svg") no-repeat center center;
  mask: url("/images/PetList/pet-mask.svg") no-repeat center center;
  -webkit-mask-size: contain;
  mask-size: contain;
  ${MEDIA_TABLET} {
    width: 10rem;
    height: 9.5rem;
  }
  &:hover {
    -webkit-filter: brightness(65%);
    transition: all 0.8s ease;
  }
`
export const Title = styled.h3`
  position: relative;
  top: 0.8rem;
  font-size: ${sizes.s};
  ${MEDIA_TABLET} {
    font-size: ${sizes.m};
    top: 1rem;
  }
  &::before {
    content: "";
    position: absolute;
    top: 1.6rem;
    right: 3.4rem;
    width: 33%;
    border-bottom: 3px solid ${colors.tiffany.i300};
  }
`
export const Sex = styled.p<{sex: PetSexType}>`
  &::before {
    content: "";
    margin-right: 5px;
    background: ${(props) => `url(/images/PetList/pet-sex-${props.sex}.svg)`};
    background-repeat: no-repeat;
    width: ${sizes.m};
    height: ${sizes.m};
    display: block;
    float: left;
  }
`
export const VerticalLine = styled.span`
  &::before {
    content: "｜";
    margin-left: -3rem;
    color: ${colors.gray.i600};
  }
`
export const Age = styled.p`
  ${MEDIA_TABLET} {
    margin-left: -3rem;
  }
`
export const SexAgeWrap = styled.div`
  position: relative;
  letter-spacing: 1px;
  top: 2.5rem;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  color: ${colors.gray.i300};
  font-size: ${sizes.m};
  justify-content: space-around;
  padding: 0.5rem;
  border-radius: 10px;
  text-align: center;
  background: ${colors.tiffany.i200};
  align-items: center;
  ${MEDIA_TABLET} {
    top: 4.6rem;
    padding-top: 1.1rem;
    padding-bottom: 1.1rem;
    margin-left: -0.95rem;
    margin-right: -0.95rem;
  }
  &:hover {
    background: ${colors.tiffany.i500};
    color: ${colors.white.i100};
    transition: all 0.8s ease;
    ${Sex}, ${Age} {
      display: none;
    }
    ${VerticalLine}::before {
      margin-left: 0;
      content: "瞭解我多一點";
      color: ${colors.tiffany.i400};
      letter-spacing: 2px;
    }
  }
`


