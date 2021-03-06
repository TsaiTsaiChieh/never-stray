import styled from 'styled-components'

import {PetStatus} from '../../constants/EnumType'
import {MEDIA_TABLET} from '../../constants/Mixin'
import {colors, sizes} from '../../constants/Variables'
import {StyledAvatar} from './Avatar'
import {TrackingOrNot} from './Tracking'

export const Sex = styled.p<{sex: PetSexType}>`
  display: flex;
  align-items: center;
  &::before {
    content: "";
    margin-right: 5px;
    background: ${(props) => `url(/images/PetList/pet-sex-${props.sex}.svg)`};
    background-repeat: no-repeat;
    width: ${sizes.xs};
    height: ${sizes.xs};
    background-size: auto 100%;
    background-position: center center;
    display: block;
    float: left;
    ${MEDIA_TABLET} {
      width: ${sizes.l};
      height: ${sizes.l};
    }
  }
`
export const VerticalLine = styled.span`
  ${MEDIA_TABLET} {
    &::before {
      content: "｜";
      position: relative;
      right: 1.8rem;
      color: ${colors.gray.i600};
    }
  }
`
export const Age = styled.p`
  ${MEDIA_TABLET} {
    margin-left: -3.5rem;
  }
`
export const SexAgeWrap = styled.div`
  position: relative;
  letter-spacing: 1px;
  top: 2.2rem;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  color: ${colors.gray.i300};
  font-size: ${sizes.xs};
  justify-content: space-around;
  padding: 0.5rem;
  border-radius: 10px;
  text-align: center;
  background: ${colors.tiffany.i200};
  align-items: center;
  ${MEDIA_TABLET} {
    top: 4.8rem;
    padding-top: 0.95rem;
    padding-bottom: 0.95rem;
    margin-left: -0.95rem;
    margin-right: -0.95rem;
    font-size: ${sizes.s};
  }
`
export const ProfileWrap = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  box-shadow: 0px 0px 8px ${colors.gray.t100};
  background: ${colors.white.i100};
  border-radius: 5px;
`

export const OuterHoverWrap = styled.div`
  padding: 9px;
  border: 1px solid white;

  &:hover {
    background: ${colors.tiffany.i200};
    border-radius: 5px;
    border: 1px solid ${colors.tiffany.i300};
    ${SexAgeWrap} {
      background: ${colors.tiffany.i500};
      color: ${colors.white.i100};
      transition: all 0.8s ease;
    }
    ${Sex}, ${Age} {
      display: none;
    }
    ${VerticalLine}::before {
      position: static;
      margin-left: 0;
      content: "瞭解我多一點";
      color: ${colors.tiffany.i400};
      letter-spacing: 2px;
    }
    ${StyledAvatar} {
      -webkit-filter: brightness(75%);
      transition: all 0.8s ease;
    }

    ${TrackingOrNot} {
      display: block;
    }
  }
`
export const Container = styled.div`
  display: flex;
  height: 9.2rem;
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
  bottom: 5.8rem;
  ${MEDIA_TABLET} {
    bottom: 10.8rem;
  }
`

export const PawImg = styled.img`
  width: 80%;
  position: relative;
  content: url("/images/PetList/paw.svg");
  top: 1.8rem;
  right: 0.75rem;
  ${MEDIA_TABLET} {
    top: 3rem;
    right: 1.1rem;
    width: 90%;
  }
`
export const AdoptedImg = styled.img<{status: PetStatusType}>`
  display: ${(props) =>
    props.status === PetStatus.ADOPTED ? 'block' : 'none'};
  position: absolute;
  z-index: 9;
  content: url("/images/PetList/adopted.png");
  width: 90px;
  height: 90px;
  bottom: -30px;
  right: -31px;
  ${MEDIA_TABLET} {
    bottom: -32px;
    right: -20px;
  }
`

export const Title = styled.h3`
  position: relative;
  top: 0.5rem;
  font-size: ${sizes.xs};
  ${MEDIA_TABLET} {
    font-size: ${sizes.m};
    top: 1rem;
  }
  &::before {
    content: "";
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 1.2rem;
    left: 0;
    right: 0;
    width: 40%;
    border-radius: 10px;
    border-bottom: 3px solid ${colors.tiffany.i300};
  }
  ${MEDIA_TABLET} {
    &::before {
      top: 1.6rem;
    }
  }
`
