import {Dispatch, SetStateAction, useState} from 'react'
import styled from 'styled-components'

import {searchPet} from '../../api/PetsAPI'
import {colors, sizes} from '../../constants/Variables'

interface Props {
  className?: string
  setPets: Dispatch<SetStateAction<PetDataType[]>>
  setTotal: Dispatch<SetStateAction<number>>
  setSearchFilters: Dispatch<SetStateAction<SearchPetFilters>>
  searchFilters: SearchPetFilters
}
const Pagination = ({
  className,
  setPets,
  setTotal,
  setSearchFilters,
  searchFilters,
}: Props) => {
  const [selected, setSelected] = useState<number>(searchFilters.page)
  const {page} = searchFilters

  return (
    <ul id="Pagination" className={className}>
      <p className="minus-ten">-10</p>
      <img src="/images/prev-arrow.png" alt="prev" className="prev" />
      {Array.from({length: 5}, (_, ele) => (
        <li
          key={ele + page}
          className={`page-${ele} ${ele + page === selected ? 'current' : ''}`}
          onClick={() => {
            setSelected(ele + page)
            setSearchFilters({...searchFilters, page: ele + page})
            searchPet(setPets, setTotal, {...searchFilters, page: ele + page})
          }}
        >
          {ele + page}
        </li>
      ))}
      <img src="/images/next-arrow.png" alt="prev" className="next" />
      <p className="plus-ten">+10</p>
    </ul>
  )
}

const StyledPagination = styled(Pagination)`
  cursor: pointer;
  width: 90%;
  display: grid;
  margin: 40px auto 40px auto;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  grid-auto-flow: column;
  font-size: ${sizes.m};
  img {
    display: flex;
    align-items: center;
  }
  p,
  [class^="page"] {
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
  }
  li.current {
    border-radius: 12px;
    background-color: ${colors.blue.i100};
    color: ${colors.white.i100};
  }
`
export default StyledPagination
