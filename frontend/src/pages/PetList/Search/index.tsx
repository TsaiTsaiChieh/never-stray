import {useEffect} from 'react'

import {api} from '../../../services/api'
import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {closeSearchBoard} from '../../../store/reducers/uiSlice'
import {Closed, SearchBoardContainer} from '../../../styled/PetList/SearchBoard'
import {FilterButton} from '../FilterButton'
import AgeFilter from './AgeFilter'
import CityFilter from './CityFilter'
import CleanupFilters from './CleanupFilters'
import ColorFilter from './ColorFilter'
import Counter from './Counter'
import ExpandFilters from './ExpandFilters'
import LigationFilter from './LigationFilter'
import RefFilter from './RefFilter'
import SexFilter from './SexFilter'
import ShelterFilter from './ShelterFilter'
import StatusFilter from './StatusFilter'

interface Props {
  count?: number
}
const SearchBoard = ({count}: Props) => {
  const {searchBoardIsShow} = useAppSelector((state) => state.ui)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(api.endpoints.getPetColors.initiate())
    dispatch(api.endpoints.getPetCities.initiate())
    dispatch(api.endpoints.getPetShelters.initiate())
  }, [])


  return (
    <SearchBoardContainer isShow={searchBoardIsShow}>
      <FilterButton />
      <ExpandFilters />
      <Counter count={count} />
      <Closed onClick={() => dispatch(closeSearchBoard())} />
      <AgeFilter />
      <SexFilter />
      <LigationFilter />
      <ColorFilter />
      <CityFilter />
      <ShelterFilter />
      <StatusFilter />
      <RefFilter />
      <CleanupFilters />
    </SearchBoardContainer>
  )
}

export default SearchBoard
