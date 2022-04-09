import {useEffect} from 'react'

import {useAppDispatch, useAppSelector} from '../../../store/hooks'
import {
  getCities,
  getPetColors,
  getShelters,
} from '../../../store/reducers/enumSlice'
import {closeSearchBoard} from '../../../store/reducers/uiSlice'
import {Closed, SearchBoardContainer} from '../../../styled/PetList/SearchBoard'
import {FilterButton} from '../FilterButton'
import AgeFilter from './AgeFilter'
import CityFilter from './CityFilter'
import ColorFilter from './ColorFilter'
import LigationFilter from './LigationFilter'
import RefFilter from './RefFilter'
import SexFilter from './SexFilter'
import ShelterFilter from './ShelterFilter'
import StatusFilter from './StatusFilter'

const SearchBoard = () => {
  const {searchBoardIsShow} = useAppSelector((state) => state.ui)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPetColors())
    dispatch(getCities())
    dispatch(getShelters())
  }, [])


  return (
    <SearchBoardContainer isShow={searchBoardIsShow}>
      <FilterButton />
      <Closed onClick={() => dispatch(closeSearchBoard())} />
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
