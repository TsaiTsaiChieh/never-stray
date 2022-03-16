import axios, {AxiosResponse} from 'axios'
import {Dispatch, SetStateAction} from 'react'
import {PetKind} from '../components/enumType'

const {REACT_APP_API_URL} = process.env

export async function searchPet(
  setPets: Dispatch<SetStateAction<PetDataType[]>>,
  filters: SearchPetFilters,
) {
  try {
    let url = filters.page ?
      `${REACT_APP_API_URL}/pets?page=${filters.page}` :
      `${REACT_APP_API_URL}/pets?page=1`
    if (filters.limit) url += `&limit=${filters.limit}`
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

    const res: AxiosResponse = await axios({
      method: 'GET',
      url: url,
    })
    const data: PetsAPIType = await res.data
    setPets(data.pet)
  } catch (error) {
    setPets([])
  }
}