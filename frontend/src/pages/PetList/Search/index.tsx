import {useEffect} from 'react'

import {useAppDispatch} from '../../../store/hooks'
import {
  getCities,
  getPetColors,
  getShelters,
} from '../../../store/reducers/enumSlice'
import {Closed, SearchBoardContainer} from '../../../styled/PetList/SearchBoard'
import AgeFilter from './AgeFilter'
import CityFilter from './CityFilter'
import ColorFilter from './ColorFilter'
import LigationFilter from './LigationFilter'
import RefFilter from './RefFilter'
import SexFilter from './SexFilter'
import ShelterFilter from './ShelterFilter'
import StatusFilter from './StatusFilter'

const SearchBoard = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPetColors())
    dispatch(getCities())
    dispatch(getShelters())
  }, [])


  return (
    <SearchBoardContainer>
      <Closed />
      <AgeFilter />
      <SexFilter />
      <LigationFilter />
      <ColorFilter />
      <CityFilter />
      <ShelterFilter />
      <StatusFilter />
      <RefFilter />
    </SearchBoardContainer>
  )
}

export default SearchBoard
