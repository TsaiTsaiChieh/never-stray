interface PetListState {
  filters: SearchPetFilters
}

interface EnumState {
  colors: string[]
  cities: IDAndNameType[]
  shelters: IDAndNameType[]
}

interface UIState {
  searchBoardIsShow: boolean
  keywordSearchTextFieldIsShow: boolean
  kindContainerIsShow: boolean
  filterBtnIsShow: boolean
  closeTextSearchIsShow: boolean
}

interface AuthState {
  isLogin: boolean
  userData?: UserInfoType
}
