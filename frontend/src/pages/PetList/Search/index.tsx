import {
  SearchBoardContainer,
  SexWrap,
  SexName,
  SexItem,
  SexItems,
  LigationWrap,
  LigationName,
  LigationItems,
  LigationItem,
  ColorDropDown,
  ColorName,
  ColorDropDownContent,
  Color,
  ColorWrap,
  RegionWrap,
  RegionName,
  RegionDropDown,
  RegionDropDownContent,
  Region,
  ShelterWrap,
  ShelterName,
  ShelterDropDown,
  ShelterDownContent,
  Shelter,
  RefWrap,
  RefName,
  RefItems,
  RefItem,
  Closed,
} from '../../../styled/PetList/SearchBoard'
import AgeFilter from './AgeFilter'


const SearchBoard = () => {
  return (
    <SearchBoardContainer id="SearchBoard" >
      <Closed />
      <AgeFilter />
      <SexWrap>
        <SexName>性別</SexName>
        <SexItems>
          <SexItem>妹妹</SexItem>
          <SexItem>弟弟</SexItem>
          <SexItem>未知</SexItem>
        </SexItems>
      </SexWrap>
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
