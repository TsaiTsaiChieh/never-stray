import styled from 'styled-components'
import {MEDIA_TABLET} from '../../constants/Mixin'
import {colors, filters, sizes} from '../../constants/Variables'

export const Text = styled.span`
  font-size: ${sizes.s};
  margin: 0 10px 0 10px;
  padding: 10px 0 10px 0;
  ${MEDIA_TABLET} {
    margin-left: 0px;
  }
  &::first-letter {
    letter-spacing: 2px;
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
export const StyledMenu = styled.div`
  width: 100%;
  background-color: ${colors.tiffany.i100};
  padding: 7px 0 7px 0;
  display: grid;
  grid-template-columns: repeat(3, 3.8rem);
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
