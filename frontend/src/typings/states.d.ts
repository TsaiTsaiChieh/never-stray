interface PetListState {
  loading: boolean
  filters: SearchPetFilters
  totalPage: number
}

interface EnumState {
  colors: string[]
  cities: IDAndNameType[]
  shelters: IDAndNameType[]
}

interface UIState {
  searchBoardIsShow: boolean
  searchMaskIsShow: boolean
  keywordSearchTextFieldIsShow: boolean
  kindContainerIsShow: boolean
  filterBtnIsShow: boolean
  closeTextSearchIsShow: boolean
}

interface AuthState {
  isLogin: boolean
  userData?: UserInfoType
}
