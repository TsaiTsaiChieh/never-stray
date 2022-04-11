import styled from 'styled-components'

import {MEDIA_DESKTOP, MEDIA_TABLET} from '../../constants/Mixin'
import {colors, filters, sizes} from '../../constants/Variables'
import {FilterContainer} from './FilterButton'

export const Text = styled.span`
  font-size: ${sizes.s};
  margin: 0 10px 0 10px;
  padding: 10px 0 10px 0;
  ${MEDIA_TABLET} {
    font-size: 15px;
    margin-left: 0px;
  }
  &::first-letter {
    letter-spacing: 1px;
  }
  &::after {
    text-align: center;
    color: ${colors.gray.i500};
  }
`
export const Img = styled.img`
  display: none;
  filter: ${filters.tiffany.i400};
  ${MEDIA_TABLET} {
    display: block;
    width: 32%;
    padding: 4px 8px 4px 8px;
  }
`
export const Wrap = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  .all-text::after {
    content: "全部";
  }
  .cat-text::after {
    content: "貓";
    ${MEDIA_TABLET} {
      content: "喵喵";
    }
  }
  .dog-text::after {
    content: "狗";
    ${MEDIA_TABLET} {
      content: "汪汪";
    }
  }
`
export const KindContainer = styled.div<{isShow: boolean}>`
  display: ${(props) => (props.isShow ? 'grid' : 'none')};
  padding: 7px 0 7px 0;
  grid-template-columns: repeat(3, 3.4rem);
  grid-column-gap: 0.3rem;
  justify-content: center;
  ${MEDIA_TABLET} {
    padding: ${sizes.s} 0 ${sizes.s} 0;
    grid-template-columns: repeat(3, 6rem);
    grid-column-gap: 1rem;
  }
  /* Selected */
  .option-selected {
    background: ${colors.tiffany.i300};
    border-radius: 12px;
    ${Text}::after {
      color: ${colors.white.i100};
    }
    ${Img} {
      filter: ${filters.white.i100};
    }
  }
  /* Hovered */
  .option-selected:hover,
  ${Wrap}:not(.option-selected):hover {
    background: ${colors.tiffany.i500};
    border-radius: 12px;
    transition: background-color 0.8s ease;
    ${Text}::after {
      color: ${colors.white.i100};
    }
    ${Img} {
      filter: ${filters.white.i100};
    }
  }
`
export const StyledMenu = styled.div`
  background-color: ${colors.tiffany.i100};
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  ${MEDIA_DESKTOP} {
    /* filter icon */
    ${FilterContainer} {
      display: none;
    }
  }
`
export const TextFieldGroup = styled.div<{isShow: boolean}>`
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  position: relative;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30px;
  background: ${colors.white.i100};
  border-radius: 25px;
  justify-content: flex-end;
  border: 1px solid ${colors.gray.i700};
  z-index: 9;
  margin-top: 9px;
  margin-bottom: 9px;
  &:hover {
    border: 1px solid ${colors.tiffany.i300};
  }
`
export const TextField = styled.input`
  color: ${colors.gray.i400};
  position: absolute;
  letter-spacing: 1px;
  left: 30px;
  font-size: ${sizes.xs};
  border: none;
  &::placeholder {
    color: ${colors.gray.i100};
  }
`
export const SearchIcon = styled.img`
  position: absolute;
  left: 10px;
  width: 15px;
  height: 15px;
  content: url("/images/PetList/search.svg");
`

export const KeywordSearchButton = styled.img<{isShow: boolean}>`
  width: 30px;
  height: 30px;
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  position: absolute;
  right: 6%;
  content: url("/images/PetList/search-in-circle.svg");
`
export const CloseKeywordSearchButton = styled.img<{isShow: boolean}>`
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  width: 24px;
  height: 24px;
  content: url("/images/PetList/close-text-search.svg");
  position: absolute;
  right: 3%;
  z-index: 10;
`
