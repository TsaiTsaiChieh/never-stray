import {useEffect} from 'react'
import {useAppDispatch} from '../../../store/hooks'
import {
  Closed,
  RefItem,
  RefItems,
  RefName,
  RefWrap,
  Region,
  RegionDropDown,
  RegionDropDownContent,
  RegionName,
  RegionWrap,
  SearchBoardContainer,
  Shelter,
  ShelterDownContent,
  ShelterDropDown,
  ShelterName,
  ShelterWrap,
} from '../../../styled/PetList/SearchBoard'
import AgeFilter from './AgeFilter'
import LigationFilter from './LigationFilter'
import SexFilter from './SexFilter'
import {getPetColors} from '../../../store/reducers/enumSlice'
import ColorFilter from './ColorFilter'

const SearchBoard = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPetColors())
  }, [])


  return (
    <SearchBoardContainer>
      <Closed />
      <AgeFilter />
      <SexFilter />
      <LigationFilter />
      <ColorFilter />
      <RegionWrap>
        <RegionName>地區</RegionName>
        <RegionDropDown>
          <RegionDropDownContent>
            <Region>北部</Region>
            <Region>中部</Region>
          </RegionDropDownContent>
        </RegionDropDown>
      </RegionWrap>
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
