import {
  Closed,
  Color,
  ColorDropDown,
  ColorDropDownContent,
  ColorName,
  ColorWrap,
  LigationItem,
  LigationItems,
  LigationName,
  LigationWrap,
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
import SexFilter from './SexFilter'

const SearchBoard = () => {
  return (
    <SearchBoardContainer id="SearchBoard">
      <Closed />
      <AgeFilter />
      <SexFilter />
      <LigationWrap>
        <LigationName>結紮</LigationName>
        <LigationItems>
          <LigationItem>已結紮</LigationItem>
          <LigationItem>未結紮</LigationItem>
          <LigationItem>未知</LigationItem>
        </LigationItems>
      </LigationWrap>
      <ColorWrap>
        <ColorName>顏色</ColorName>
        <ColorDropDown>
          <ColorDropDownContent>
            <Color>黑</Color>
            <Color>白</Color>
          </ColorDropDownContent>
        </ColorDropDown>
      </ColorWrap>
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
