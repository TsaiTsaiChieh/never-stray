import {Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'

import {searchPet} from '../../api/PetsAPI'
import {PetKind} from '../../components/enumType'
import {MEDIA_TABLET} from '../../constants/Mixin'
import {colors, filters, sizes} from '../../constants/Variables'

interface Props {
  className?: string;
  setPets: Dispatch<SetStateAction<PetDataType[]>>;
  searchFilters: SearchPetFilters;
}
const Menu = ({className = 'Menu', setPets, searchFilters}: Props) => {
  return (
    <div id={className} className={className}>
      <div
        className="pet-option-wrap all-option option-selected"
        onClick={() => searchPet(setPets, searchFilters)}
      >
        <img
          className="pet-option-svg all-pets-svg"
          src="images/Menu/all-option.svg"
        />
        <span className="pet-option-text all-pet-text"></span>
      </div>

      <div
        className="pet-option-wrap cat-option"
        onClick={() =>
          searchPet(setPets, {...searchFilters, kind: PetKind.CAT})
        }
      >
        <img
          className="pet-option-svg cat-pets-svg"
          src="images/Menu/cat-option.svg"
        />
        <span className="pet-option-text cat-pet-text" />
      </div>

      <div
        className="pet-option-wrap dog-option"
        onClick={() =>
          searchPet(setPets, {...searchFilters, kind: PetKind.DOG})
        }
      >
        <img
          className="pet-option-svg dog-pets-svg"
          src="images/Menu/dog-option.svg"
        />
        <span className="pet-option-text dog-pet-text" />
      </div>
    </div>
  )
}

const StyledMenu = styled(Menu)`
  width: 100%;
  background-color: ${colors.tiffany.i100};
  padding: ${sizes.m} 0 ${sizes.m} 0;
  display: grid;
  grid-template-columns: 3.8rem 3.8rem 3.8rem;
  grid-column-gap: 0.3rem;
  justify-content: center;
  ${MEDIA_TABLET} {
    padding: ${sizes.s} 0 ${sizes.s} 0;
    grid-template-columns: 6rem 6rem 6rem;
    grid-column-gap: 1rem;
  }
  .pet-option-wrap {
    cursor: pointer;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .pet-option-svg {
      display: none;
      filter: ${filters.tiffany.i400};
      ${MEDIA_TABLET} {
        display: block;
        width: 32%;
        padding: 4px 8px 4px 8px;
      }
    }
    span.pet-option-text {
      font-size: ${sizes.m};
      margin: 0 10px 0 10px;
      padding: 10px 0 10px 0;
      ${MEDIA_TABLET} {
        margin-left: 0px;
      }
    }
    span.pet-option-text::first-letter {
      letter-spacing: 2px;
    }
    span.pet-option-text::after {
      text-align: center;
      color: ${colors.gray.i500};
    }

    span.all-pet-text::after {
      content: "全部";
    }

    span.cat-pet-text::after {
      content: "貓";
      ${MEDIA_TABLET} {
        content: "喵喵";
      }
    }

    span.dog-pet-text::after {
      content: "狗";
      ${MEDIA_TABLET} {
        content: "汪汪";
      }
    }
  }

  /* Selected */
  .option-selected {
    background-color: ${colors.tiffany.i300};
    border-radius: 12px;
    span.all-pet-text::after,
    span.cat-pet-text::after,
    span.dog-pet-text::after {
      color: ${colors.white.i100};
    }
    .pet-option-svg {
      filter: ${filters.white.i100};
    }
  }
`
export default StyledMenu
