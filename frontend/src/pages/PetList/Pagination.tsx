import {Dispatch, SetStateAction, useState} from 'react'

import {searchPet} from '../../api/PetsAPI'
import {
  Arrow,
  Offset,
  Page,
  StyledPagination,
} from '../../styled/PetList/Pagination'

interface Props {
  setPets: Dispatch<SetStateAction<PetDataType[]>>;
  setTotal: Dispatch<SetStateAction<number>>;
  setSearchFilters: Dispatch<SetStateAction<SearchPetFilters>>;
  searchFilters: SearchPetFilters;
}
const Pagination = ({
  setPets,
  setTotal,
  setSearchFilters,
  searchFilters,
}: Props) => {
  const [selected, setSelected] = useState<number>(searchFilters.page)
  const {page} = searchFilters

  return (
    <StyledPagination>
      <Offset>-10</Offset>
      <Arrow src="/images/prev-arrow.png" />
      {Array.from({length: 5}, (_, ele) => (
        <Page
          key={ele + page}
          className={`page-${ele} ${ele + page === selected ? 'current' : ''}`}
          onClick={() => {
            setSelected(ele + page)
            setSearchFilters({...searchFilters, page: ele + page})
            searchPet(setPets, setTotal, {
              ...searchFilters,
              page: ele + page,
            })
          }}
        >
          {ele + page}
        </Page>
      ))}
      <Arrow src="/images/next-arrow.png" />
      <Offset>+10</Offset>
    </StyledPagination>
  )
}

export default Pagination
