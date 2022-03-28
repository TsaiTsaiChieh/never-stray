interface PetListState {
  loading: boolean
  filters: SearchPetFilters
  pets?: IPet[]
  totalPage: number
}
