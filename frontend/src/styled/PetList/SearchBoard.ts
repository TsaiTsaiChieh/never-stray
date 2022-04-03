import Select from 'react-select'
import styled from 'styled-components'

import {MEDIA_DESKTOP, MEDIA_TABLET} from '../../constants/Mixin'
import {colors, sizes} from '../../constants/Variables'
import {CloseButton} from '../Base/CloseButton'

const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${colors.gray.i100};
  font-size: ${sizes.xs};
  letter-spacing: 1px;
  background: ${colors.white.i100};
  color: ${colors.gray.i400};
  &:hover {
    border: 1px solid ${colors.tiffany.i300};
  }
  &.selected {
    border: 1px solid ${colors.tiffany.i300};
    color: ${colors.white.i100};
    background: ${colors.tiffany.i300};
  }
`
const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  grid-column-gap: 0.5rem;
  justify-content: space-between;
  ${MEDIA_TABLET} {
    grid-column-gap: 0.6rem;
  }
`
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  padding-bottom: 22px;
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
const Selector = styled(Select)`
  font-size: ${sizes.xs};
  letter-spacing: 1px;
  .Select__control:hover {
    border-color: ${colors.tiffany.i301};
  }
  .Select__control--menu-is-open {
    border-color: ${colors.tiffany.i300};
  }
  .Select__control--is-focused {
    box-shadow: 0 0 0 1px ${colors.tiffany.i300};
    outline: none;
  }
  .Select__option {
    background: white;
    color: ${colors.gray.i400};
  }
  .Select__option:hover {
    background: ${colors.tiffany.i100};
  }
  .Select__multi-value {
    background: ${colors.tiffany.i100};
  }
`
export const Closed = styled(CloseButton)`
  ${MEDIA_DESKTOP} {
    display: none;
  }
`
export const SearchBoardContainer = styled.div`
  display: none;
  width: 80%;
  height: 70vh;
  position: fixed;
  align-content: center;
  grid-template-rows: repeat(auto-fill, 80px);
  background: white;
  z-index: 10;
  overflow-y: auto;
  grid-auto-flow: column;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
  padding-top: 50px;
  padding-bottom: 20px;
  padding-left: 30px;
  ${MEDIA_TABLET} {
    display: none;
    position: absolute;
    height: auto;
    min-height: 900px;
    bottom: auto;
    right: auto;
    border-radius: 0;
    width: 100%;
    min-width: 367px;
    padding-left: ${sizes.xl};
    grid-template-rows: repeat(auto-fill, minmax(90px, auto));
    box-shadow: 8px 0 12px ${colors.gray.t100};
  }
  ${MEDIA_DESKTOP} {
    display: grid;
    position: relative;
    height: 100%;
    min-height: 700px;
    max-height: 700px;
    align-content: space-between;
    width: 100%;
    min-width: 290px;
    max-width: 290px;
    box-shadow: 0 0 8px ${colors.gray.t100};
    border-radius: 5px;
    top: 40px;
    left: 0;
    bottom: 0;
    right: 0;
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

export const LigationWrap = styled(Wrap)``
export const LigationName = styled(Name)``
export const LigationItems = styled(Items)``
export const LigationItem = styled(Button)``
export const ColorWrap = styled(Wrap)``
export const ColorName = styled(Name)``
export const ColorSelector = styled(Selector)``

export const CityWrap = styled(Wrap)``
export const CityName = styled(Name)``
export const CitySelector = styled(Selector)``

export const RegionWrap = styled(Wrap)``
export const RegionName = styled(Name)``

export const ShelterWrap = styled(Wrap)``
export const ShelterName = styled(Name)``
export const ShelterSelector = styled(Selector)``

export const RefWrap = styled(Wrap)``
export const RefName = styled(Name)``
export const RefItems = styled(Items)`
  justify-content: start;
  grid-column-gap: 1.8rem;
`
export const RefItem = styled(Button)`
  width: 100px;
`