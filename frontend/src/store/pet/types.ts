export const FETCH_PETS_REQUEST = 'FETCH_PETS_REQUEST'
export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS'
export const FETCH_PETS_FAILURE = 'FETCH_USERS_FAILURE'
export const FETCH_PETS_TOTAL_PAGE = 'FETCH_PETS_TOTAL_PAGE'
export const FETCH_PETS_FILTERS = 'FETCH_PETS_FILTERS'

export interface PetLoading {
  type: typeof FETCH_PETS_REQUEST
}

export interface PetSuccess {
  type: typeof FETCH_PETS_SUCCESS,
  payload: IPet[]
}

export interface PetFailure {
  type: typeof FETCH_PETS_FAILURE,
}

export interface PetTotalPage {
  type: typeof FETCH_PETS_TOTAL_PAGE,
  payload: number
}

export interface PetFilters {
  type: typeof FETCH_PETS_FILTERS,
  payload: SearchPetFilters
}

export type PetDispatchTypes =
  | PetLoading
  | PetSuccess
  | PetFailure
  | PetTotalPage
  | PetFilters

