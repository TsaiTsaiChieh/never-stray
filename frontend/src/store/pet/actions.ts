import axios, {AxiosResponse} from 'axios'
import {Dispatch} from 'react'

import {PetKind, PetStatus} from '../../constants/EnumType'
import {
  FETCH_PETS_FAILURE,
  FETCH_PETS_FILTERS,
  FETCH_PETS_REQUEST,
  FETCH_PETS_SUCCESS,
  FETCH_PETS_TOTAL_PAGE,
  PetDispatchTypes,
} from './types'

const {REACT_APP_API_URL} = process.env

export const fetchPetsRequest = () => ({
  type: FETCH_PETS_REQUEST,
})
export const fetchPetsSuccess = (pets: IPet[]) => ({
  type: FETCH_PETS_SUCCESS,
  payload: pets,

})
export const fetchPetsFailure = (_error: string) => ({
  type: FETCH_PETS_FAILURE,
})

// action creator
export const fetchPets =
  (filters: SearchPetFilters = {
    status: PetStatus.OPEN,
    limit: 18,
    page: 1,
    ascend: true,
  }) =>
    async (dispatch: Dispatch<PetDispatchTypes>) => {
      try {
        // Loading
        dispatch({type: FETCH_PETS_REQUEST})
        dispatch({type: FETCH_PETS_FILTERS, payload: filters})
        // Fetch
        let url = `${REACT_APP_API_URL}/pets?page=${filters.page}` +
          `&limit=${filters.limit}`
        if (filters.status) url += `&status=${filters.status}`
        if (filters.ref) url += `&ref=${filters.ref}`
        if (filters.city_id) url += `&city_id=${filters.city_id}`
        if (filters.shelter_id) url += `&shelter_id=${filters.shelter_id}`
        if (filters.kind && filters.kind !== PetKind.ALL) {
          url += `&kind=${filters.kind}`
        }
        if (filters.sex) url += `&sex=${filters.sex}`
        if (filters.color) url += `&color=${filters.color}`
        if (filters.age) url += `&age=${filters.age}`
        if (filters.region) url += `&region=${filters.region}`
        if (filters.order_key) {
          url += `&order_key=${filters.order_key}&ascend=${filters.ascend}`
        }
        const res: AxiosResponse = await axios({method: 'GET', url})
        const data: PetsAPIType = res.data
        dispatch({type: FETCH_PETS_SUCCESS, payload: data.pets})
        dispatch({type: FETCH_PETS_TOTAL_PAGE, payload: data.page.total})
      } catch (error) {
        dispatch({type: FETCH_PETS_FAILURE})
      }
    }
