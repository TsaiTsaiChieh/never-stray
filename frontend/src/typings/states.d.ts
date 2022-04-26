interface PetListState {
  loading: boolean
  filters: SearchPetFilters
  pets: IPet[]
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
  name?: string
  email: string
  picture?: string
  token: string
}
