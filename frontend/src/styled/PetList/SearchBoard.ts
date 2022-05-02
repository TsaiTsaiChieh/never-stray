import Select from 'react-select'
import styled from 'styled-components'

import {MEDIA_DESKTOP, MEDIA_TABLET} from '../../constants/Mixin'
import {colors, sizes} from '../../constants/Variables'
import {CloseButton} from '../Base/CloseButton'
import {FilterContainer} from './FilterButton'

export const Button = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${colors.gray.i700};
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
export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-column-gap: 0.5rem;
  justify-content: start;
  ${MEDIA_TABLET} {
    grid-column-gap: 0.6rem;
  }
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 22px;
  ${MEDIA_TABLET} {
    margin-left: 25px;
  }
`
export const Name = styled.h3`
  font-size: ${sizes.xs};
  letter-spacing: 1px;
  padding-bottom: 7px;
  color: ${colors.gray.i400};
  ${MEDIA_TABLET} {
    padding-bottom: 12px;
  }
`
export const Selector = styled(Select)`
  width: 255px;
  font-size: ${sizes.xs};
  letter-spacing: 1px;
  ${MEDIA_TABLET} {
    width: 260px;
  }
  .Select__control {
    border-color: ${colors.gray.i700};
  }
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
  ${MEDIA_TABLET} {
    width: 30px;
    height: 30px;
    top: 138px;
    left: 330px;
  }
  ${MEDIA_DESKTOP} {
    display: none;
  }
`
export const SearchBoardContainer = styled.div<{isShow: boolean}>`
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 100px);
  position: fixed;
  align-content: center;
  grid-template-rows: repeat(auto-fill, 80px);
  background: white;
  z-index: 10;
  overflow-y: auto;
  grid-auto-flow: column;
  margin: auto;
  top: 0;
  bottom: 10px;
  left: 0;
  right: 0;
  /* filter icon */
  ${FilterContainer} {
    display: none;
  }
  ${MEDIA_TABLET} {
    position: absolute;
    height: auto;
    align-items: normal;
    min-height: 900px;
    overflow-y: visible;
    bottom: auto;
    right: auto;
    width: 100%;
    min-width: 367px;
    padding-top: 60px;
    grid-template-rows: repeat(auto-fill, minmax(90px, auto));
    box-shadow: 8px 0 12px ${colors.gray.t100};
  }
  ${MEDIA_DESKTOP} {
    position: relative;
    min-height: 770px;
    max-height: 770px;
    align-content: space-between;
    width: 310px;
    min-width: 310px;
    border-radius: 10px;
    box-shadow: 0 0 8px ${colors.gray.t100};
    border-radius: 5px;
    top: 40px;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 80px;
    /* filter icon */
    ${FilterContainer} {
      display: flex;
    }
  }
`
export const AgeWrap = styled(Wrap)`
  margin-top: 35px;
  ${MEDIA_TABLET} {
    margin-top: 0;
  }
`
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
export const RefItems = styled(Items)``
export const RefItem = styled(Button)`
  width: 110px;
  &:last-child {
    margin-left: 30px;
  }
`
export const CounterOuter = styled.div`
  height: 60px;
  position: fixed;
  background: ${colors.white.i100};
  display: flex;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  font-size: ${sizes.xs};
  letter-spacing: 1px;
  text-align: center;
  box-shadow: 0px 0px 8px ${colors.gray.t100};
  z-index: 40;
  ${MEDIA_TABLET} {
    box-shadow: none;
    height: 0;
    left: 110px;
    align-items: normal;
    position: absolute;
    flex-direction: row;
    color: ${colors.gray.i300};
    top: 30px;
    ${MEDIA_DESKTOP} {
      font-size: ${sizes.s};
      left: auto;
      right: 30px;
    }
  }
`
export const CounterValue = styled.span`
  color: ${colors.tiffany.i300};
  margin-right: 2px;
`
export const CounterBtn = styled(Button)`
  background: ${colors.tiffany.i300};
  color: ${colors.white.i100};
  width: 200px;
  border: none;
`
export const StyledExpandFilters = styled.p`
  width: 100vw;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 40;
  box-shadow: 0px 0px 8px ${colors.gray.t100};
  background: ${colors.white.i100};
  color: ${colors.gray.i500};
  font-size: ${sizes.s};
  letter-spacing: 2px;
  ${MEDIA_TABLET} {
    display: none;
  }
`
export const CleanupFiltersBtn = styled(Button)`
  border: none;
  color: ${colors.tiffany.i300};
  position: fixed;
  top: 0;
  left: 7%;
  z-index: 41;
  &:hover {
    border: none;
  }
  ${MEDIA_TABLET} {
    color: ${colors.gray.i300};
    position: relative;
    margin-left: 25px;
    left: 0;
    border: 1px solid ${colors.gray.i700};
    &:hover {
      border: 1px solid ${colors.red.i100};
    }
  }
`
