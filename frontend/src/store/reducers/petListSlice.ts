import axios, {AxiosResponse} from 'axios'

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {RootState} from '../'
import {PetAge, PetKind, PetStatus} from '../../constants/EnumType'

const {REACT_APP_API_URL} = process.env

const initialState: PetListState = {
  loading: true,
  filters: {
    status: PetStatus.OPEN,
    age: PetAge.ALL,
    limit: 18,
    page: 1,
    ascend: true,
  },
  pets: [],
  totalPage: 0,
}
export const getPets = createAsyncThunk(
  'petList/fetchByFilters',
  async (filters: SearchPetFilters = initialState.filters) => {
    let url = `${REACT_APP_API_URL}/pets?page=${filters.page}` +
      `&limit=${filters.limit}`
    if (filters.status) url += `&status[]=${filters.status}`
    if (filters.ref) url += `&ref[]=${filters.ref}`
    if (filters.city_id) url += `&city_id[]=${filters.city_id}`
    if (filters.shelter_id) url += `&shelter_id[]=${filters.shelter_id}`
    if (filters.kind && filters.kind !== PetKind.ALL) {
      url += `&kind[]=${filters.kind}`
    }
    if (filters.sex) url += `&sex[]=${filters.sex}`
    if (filters.color) url += `&color[]=${filters.color}`
    if (filters.age && filters.age !== PetAge.ALL) {
      url += `&age[]=${filters.age}`
    }
    if (filters.region) url += `&region[]=${filters.region}`
    if (filters.order_key) {
      url += `&order_key=${filters.order_key}&ascend=${filters.ascend}`
    }
    const res: AxiosResponse = await axios({method: 'GET', url})

    return {data: res.data, filters}
  },
)

export const petListSlice = createSlice({
  name: 'petList',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getPets.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      getPets.fulfilled,
      (state, action) => {
        state.loading = false
        state.pets = action.payload.data.pets
        state.totalPage = action.payload.data.page.total
        state.filters = action.payload.filters
      },
    )
    builder.addCase(getPets.rejected, (state) => {
      state.loading = false
    })
  },
})

export const selectPetList = (state: RootState) => state.petList
export default petListSlice.reducer
