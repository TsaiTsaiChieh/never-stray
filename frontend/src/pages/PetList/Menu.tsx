import styled from 'styled-components'

import {MEDIA_TABLET} from '../../constants/Mixin'
import {colors, filters, sizes} from '../../constants/Variables'

interface Props {
  className?: string;
}

const Menu = ({className = 'Menu'}: Props) => {
  return (
    <div id={className} className={className}>
      <div className="menu-group">
        <div className="pet-selection all-pets selected-pets">
          <div className="selection-wrap all-pets-wrap">
            <img
              className="pet-selection-svg all-pets-svg "
              src="images/all-pets.svg"
              alt="all-pets"
            />
            <span className="pet-select-text all-pets-text"></span>
          </div>
        </div>
        <div className="pet-selection cat-pet">
          <div className="selection-wrap cat-pet-wrap">
            <img
              className="pet-selection-svg cat-pet-svg"
              src="images/cat-pet.svg"
              alt="cat-pet"
            />
            <span className="pet-select-text  cat-pet-text"></span>
          </div>
        </div>
        <div className="pet-selection dog-pet">
          <div className="selection-wrap dog-pet-wrap">
            <img
              className="pet-selection-svg dog-pet-svg"
              src="images/dog-pet.svg"
              alt="dog-pet"
            />
            <span className="pet-select-text  dog-pet-text"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

const StyledMenu = styled(Menu)`
  width: 100%;
  background-color: ${colors.tiffany.i100};
  display: flex;
  justify-content: center;
  padding: 7px 0 7px 0;
  ${MEDIA_TABLET} {
    padding: 14px 0 14px 0;
  }

  .menu-group {
    display: flex;
    justify-content: space-between;

    .pet-selection {
      .all-pets-wrap,
      .cat-pet-wrap {
        margin-right: 10px;
        ${MEDIA_TABLET} {
          margin-right: 1.2rem;
        }
        ${MEDIA_TABLET} {
          margin-right: 3rem;
        }
      }

      .selection-wrap {
        cursor: pointer;
        display: flex;
        align-items: center;

        .pet-selection-svg {
          display: none;
          filter: ${filters.tiffany.i400};
          ${MEDIA_TABLET} {
            display: block;
            width: 35%;
            padding: 4px 0px 4px 4px;
          }
        }

        span.pet-select-text {
          font-size: ${sizes.m};
          margin: 0 10px 0 10px;
          padding: 10px 0 10px 0;
        }
        span.pet-select-text::after {
          text-align: center;
          color: ${colors.gray.i500};
        }
        span.pet-select-text::first-letter {
          letter-spacing: 2px;
        }
        span.all-pets-text::after {
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
    }

    /* Selected */
    .selected-pets {
      .selection-wrap {
        background-color: ${colors.tiffany.i300};
        border-radius: 12px;
        span.all-pets-text::after,
        span.cat-pet-text::after,
        span.dog-pet-text::after {
          color: ${colors.white.i100};
        }
        .pet-selection-svg {
          filter: ${filters.white.i100};
        }
      }
    }
  }
`
export default StyledMenu
