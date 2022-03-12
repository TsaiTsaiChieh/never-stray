import styled from 'styled-components'

import {colors, filters} from '../../constants/Variables'
import {
  petAgeConverter,
  petKindConverter,
  petSexConverter,
} from '../../utils/value-convert'

interface Props {
  className?: string;
  pet: PetDataType;
}

const PetProfile = ({className = 'PetProfile', pet}: Props) => {
  return (
    <div id={className} className={className}>
      <div className="pet-container">
        <div className="pet-image-wrapper">
          <img className="pet-paw" src="/images/PetList/paw.svg" />
          <div className="pet-image" />
          <h3 className="pet-title">
            {pet.color}
            {petKindConverter(pet.kind)}
          </h3>
          <div className="pet-sex-age-wrapper">
            <p className="pet-sex">{petSexConverter(pet.sex)}</p>
            <p className="pet-age">{petAgeConverter(pet.age)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const StyledPetProfile = styled(PetProfile)`
  display: flex;
  text-align: center;
  justify-content: center;
  box-shadow: 0px 0px 8px ${colors.gray.t100};
  border-radius: 5px;

  .pet-container {
    display: flex;
    height: 11rem;
    flex-direction: column;
    padding-left: 1.2rem;
    padding-right: 1.2rem;

    .pet-image-wrapper {
      position: relative;
      bottom: 8rem;
      .pet-paw {
        filter: ${filters.tiffany.i300};
        position: relative;
        top: 2.5rem;
        right: 0.6rem;
      }
      .pet-image {
        position: relative;
        object-fit: cover;
        width: 9rem;
        height: 8.5rem;
        border-radius: 10px;
        background: url(${(props) => props.pet.image[0]});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        -webkit-mask: url("/images/PetList/pet-mask.svg") no-repeat center
          center;
        mask: url("/images/PetList/pet-mask.svg") no-repeat center center;
        -webkit-mask-size: contain;
        mask-size: contain;
      }
    }

    .pet-title {
      position: relative;
      top: 0.8rem;
      font-size: 20px;
    }

    .pet-title:before {
      content: "";
      position: absolute;
      left: 2.3rem;
      top: 1.6rem;
      width: 50%;
      border-bottom: 3px solid ${colors.tiffany.i300};
    }

    .pet-sex-age-wrapper {
      color: ${colors.gray.i300};
      font-size: 18px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      position: relative;
      padding: 0.5rem;
      border-radius: 10px;
      top: 2.5rem;
      text-align: center;
      background: ${colors.tiffany.i200};
      .pet-sex::before {
        content: "";
        margin-right: 5px;
        background: ${(props) =>
    `url(/images/PetList/pet-sex-${props.pet.sex}.svg)`};
        background-repeat: no-repeat;
        width: 18px;
        height: 18px;
        display: block;
        float: left;
      }
    }
  }
`
export default StyledPetProfile
