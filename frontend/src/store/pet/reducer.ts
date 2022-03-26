import {PetStatus} from '../../constants/EnumType'
import {
  FETCH_PETS_FAILURE,
  FETCH_PETS_FILTERS,
  FETCH_PETS_REQUEST,
  FETCH_PETS_SUCCESS,
  FETCH_PETS_TOTAL_PAGE,
  PetDispatchTypes,
} from './types'

export type PetState = {
  loading: boolean
  filters: SearchPetFilters
  pets?: IPet[]
  totalPage: number
};

const initialState: PetState = {
  loading: true,
  filters: {
    status: PetStatus.OPEN,
    limit: 18,
    page: 1,
    ascend: true,
  },
  pets: [],
  totalPage: 0,
}

const petReducer = (
  state: PetState = initialState,
  action: PetDispatchTypes,
): PetState => {
  switch (action.type) {
    case FETCH_PETS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_PETS_SUCCESS:
      return {
        ...state,
        loading: false,
        pets: action.payload,
      }
    case FETCH_PETS_TOTAL_PAGE:
      return {
        ...state,
        totalPage: action.payload,
      }
    case FETCH_PETS_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case FETCH_PETS_FILTERS:
      return {
        ...state,
        loading: false,
        filters: action.payload,
      }
    default:
      return state
  }
}

export default petReducer
