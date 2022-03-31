import axios, {AxiosResponse} from 'axios'

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {RootState} from '../'
import {PetKind} from '../../constants/EnumType'

const {REACT_APP_API_URL} = process.env

const initialState: PetListState = {
  loading: true,
  filters: {
    kind: PetKind.ALL,
    age: [],
    sex: [],
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
    if (filters.status) {
      url += `${filters.status.map((ele) => `&status[]=${ele}`).join('')}`
    }
    if (filters.ref) {
      url += `${filters.ref.map((ele) => `&ref[]=${ele}`).join('')}`
    }
    if (filters.city_id) {
      url += `${filters.city_id.map((ele) => `&city_id[]=${ele}`).join('')}`
    }
    if (filters.shelter_id) {
      url += `${filters.shelter_id
        .map((ele) => `&shelter_id[]=${ele}`)
        .join('')}`
    }
    if (filters.kind && filters.kind !== PetKind.ALL) {
      url += `&kind[]=${filters.kind}`
    }
    if (filters.sex) {
      url += `${filters.sex.map((ele) => `&sex[]=${ele}`).join('')}`
    }
    if (filters.color) {
      url += `${filters.color.map((ele) => `&color[]=${ele}`).join('')}`
    }
    if (filters.age) {
      url += `${filters.age.map((ele) => `&age[]=${ele}`).join('')}`
    }
    if (filters.region) {
      url += `${filters.region.map((ele) => `&region[]=${ele}`).join('')}`
    }
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
