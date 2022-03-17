import {Dispatch, SetStateAction, useState} from 'react'
import styled from 'styled-components'

import {searchPet} from '../../api/PetsAPI'
import {PetKind} from '../../constants/EnumType'
import {MEDIA_TABLET} from '../../constants/Mixin'
import {colors, filters, sizes} from '../../constants/Variables'

interface Props {
  className?: string
  setPets: Dispatch<SetStateAction<PetDataType[]>>
  setTotal: Dispatch<SetStateAction<number>>
  setSearchFilters: Dispatch<SetStateAction<SearchPetFilters>>
  searchFilters: SearchPetFilters
}
const Menu = ({
  className,
  setPets,
  setTotal,
  setSearchFilters,
  searchFilters,
}: Props) => {
  const [selected, setSelected] = useState<string>(PetKind.ALL)
  return (
    <div id="Menu" className={className}>
      {Object.values(PetKind).map((kind) => (
        <div
          key={kind}
          className={`pet-option-wrap ${kind}-option 
          ${selected === kind ? 'option-selected' : ''}`}
          onClick={() => {
            setSelected(kind)
            setSearchFilters({...searchFilters, kind})
            searchPet(setPets, setTotal, {...searchFilters, kind})
          }}
        >
          <img
            className={`pet-option-svg ${kind}-pets-svg`}
            src={`images/Menu/${kind}-option.svg`}
          />
          <span className={`pet-option-text ${kind}-pet-text`} />
        </div>
      ))}
    </div>
  )
}

const StyledMenu = styled(Menu)`
  width: 100%;
  background-color: ${colors.tiffany.i100};
  padding: 7px 0 7px 0;
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
    background: ${colors.tiffany.i300};
    border-radius: 12px;
    span.pet-option-text::after {
      color: ${colors.white.i100};
    }
    .pet-option-svg {
      filter: ${filters.white.i100};
    }
  }

  /* Hovered */
  .option-selected:hover,
  .pet-option-wrap:not(.option-selected):hover {
    background: ${colors.tiffany.i500};
    border-radius: 12px;
    transition: all 0.8s ease;
    span.pet-option-text::after {
      color: ${colors.white.i100};
    }
    .pet-option-svg {
      filter: ${filters.white.i100};
    }
  }
`
export default StyledMenu
