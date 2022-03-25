import styled from 'styled-components'
import {MEDIA_TABLET} from '../../constants/Mixin'

import {colors, sizes} from '../../constants/Variables'

const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${colors.gray.i100};
  font-size: ${sizes.xs};
  letter-spacing: 1px;
  background: ${colors.white.i100};
  color: ${colors.gray.i400};
`
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-column-gap: 0.5rem;
  ${MEDIA_TABLET} {
    grid-column-gap: 0.6rem;
  }
`
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
`
const Name = styled.h3`
  font-size: ${sizes.xs};
  letter-spacing: 1px;
  padding-bottom: 7px;
  color: ${colors.gray.i400};
  ${MEDIA_TABLET} {
    padding-bottom: 12px;
  }
`
const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background: ${colors.white.i200};
  min-width: 261px;
  top: 0px;
  left: 1px;
  box-shadow: 0 0 8px ${colors.gray.t100};
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  opacity: 0.95;
  z-index: 30;
`
const DropDown = styled.div`
  display: flex;
  width: 260px;
  height: 40px;
  position: relative;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${colors.gray.i100};
  &:hover {
    ${DropDownContent} {
      display: block;
    }
  }
  &::before {
    padding-left: 15px;
    color: ${colors.gray.i100};
    font-size: ${sizes.xs};
  }
  &::after {
    content: "";
    background: url("/images/down-arrow.png");
    background-repeat: no-repeat;
    width: ${sizes.xs};
    height: ${sizes.xs};
    background-size: auto auto;
    background-position: center center;
    position: relative;
    left: 150px;
  }
`
const Content = styled.p`
  color: ${colors.gray.i400};
  margin: 10px 20px;
  letter-spacing: 1px;
  font-size: ${sizes.xs};
`
export const SearchBoardWrap = styled.div`
  display: grid;
  width: 80%;
  height: 65vh;
  position: fixed;
  justify-items: center;
  align-content: center;
  grid-template-rows: repeat(auto-fill, 80px);
  background: white;
  z-index: 10;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  ${MEDIA_TABLET} {
    position: absolute;
    height: auto;
    right: auto;
    border-radius: 0;
    width: 45%;
    padding-left: ${sizes.xl};
    grid-template-rows: repeat(auto-fill, 90px);
    box-shadow: 8px 0px 12px ${colors.gray.t100};
  }
`

export const AgeWrap = styled(Wrap)``
export const AgeName = styled(Name)``
export const AgeItems = styled(Items)``
export const AgeItem = styled(Button)``

export const SexWrap = styled(Wrap)``
export const SexName = styled(Name)``
export const SexItems = styled(Items)``
export const SexItem = styled(Button)``

export const LigationWrap = styled(Wrap)`
  /* background: pink; */
`
export const LigationName = styled(Name)``
export const LigationItems = styled(Items)``
export const LigationItem = styled(Button)``

export const ColorWrap = styled(Wrap)``
export const ColorDropDownContent = styled(DropDownContent)``
export const ColorDropDown = styled(DropDown)`
  &::before {
    content: "請選擇顏色";
  }
`
export const ColorName = styled(Name)``
export const Color = styled(Content)``

export const RegionWrap = styled(Wrap)``
export const RegionDropDownContent = styled(DropDownContent)``
export const RegionDropDown = styled(DropDown)`
  &::before {
    content: "請選擇地區";
  }
`
export const RegionName = styled(Name)``
export const Region = styled(Content)``

export const ShelterWrap = styled(Wrap)``
export const ShelterDownContent = styled(DropDownContent)``
export const ShelterDropDown = styled(DropDown)`
  &::before {
    content: "請選擇收容所";
  }
  &::after {
    left: 135px;
  }
`
export const ShelterName = styled(Name)``
export const Shelter = styled(Content)``

export const RefWrap = styled(Wrap)``
export const RefName = styled(Name)``
export const RefItems = styled(Items)`
  grid-column-gap: 1.8rem;
`
export const RefItem = styled(Button)`
  width: 100px;
`
