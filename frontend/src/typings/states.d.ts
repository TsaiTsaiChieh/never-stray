interface PetListState {
  loading: boolean
  filters: SearchPetFilters
  pets?: IPet[]
  totalPage: number
}

interface EnumState {
  colors: string[];
  cities: {
    id: number
    name: string
  }[]
}
