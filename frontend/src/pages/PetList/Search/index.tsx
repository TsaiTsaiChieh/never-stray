import {useEffect} from 'react'

import {useAppDispatch} from '../../../store/hooks'
import {getCities, getPetColors} from '../../../store/reducers/enumSlice'
import {
  Closed,
  RefItem,
  RefItems,
  RefName,
  RefWrap,
  SearchBoardContainer,
  Shelter,
  ShelterDownContent,
  ShelterDropDown,
  ShelterName,
  ShelterWrap,
} from '../../../styled/PetList/SearchBoard'
import AgeFilter from './AgeFilter'
import CityFilter from './CityFilter'
import ColorFilter from './ColorFilter'
import LigationFilter from './LigationFilter'
import SexFilter from './SexFilter'

const SearchBoard = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPetColors())
    dispatch(getCities())
  }, [])


  return (
    <SearchBoardContainer>
      <Closed />
      <AgeFilter />
      <SexFilter />
      <LigationFilter />
      <ColorFilter />
      <CityFilter />
      <ShelterWrap>
        <ShelterName>收容所</ShelterName>
        <ShelterDropDown>
          <ShelterDownContent>
            <Shelter>新北市五股區公立動物之家</Shelter>
          </ShelterDownContent>
        </ShelterDropDown>
      </ShelterWrap>
      <RefWrap>
        <RefName>資料來源</RefName>
        <RefItems>
          <RefItem>政府收容所</RefItem>
          <RefItem>認養地圖</RefItem>
        </RefItems>
      </RefWrap>
    </SearchBoardContainer>
  )
}

export default SearchBoard
