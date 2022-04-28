import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {RootState} from '../'
import {PetKind, PetStatus} from '../../constants/EnumType'

const initialState: PetListState = {
  loading: true,
  filters: {
    status: [PetStatus.OPEN],
    ref: [],
    city_id: [],
    shelter_id: [],
    kind: PetKind.ALL,
    age: [],
    sex: [],
    region: [],
    ligation: [],
    color: [],
    limit: 18,
    page: 1,
    ascend: true,
  },
  pets: [],
  totalPage: 1,
}

export const getPets = createAsyncThunk(
  'petList',
  async (filters: SearchPetFilters = initialState.filters, {getState}) => {
    let url =
      `${process.env.REACT_APP_API_URL}` +
      `/pets?page=${filters.page}` +
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
    if (filters.ligation) {
      url += `${filters.ligation.map((ele) => `&ligation[]=${ele}`).join('')}`
    }
    if (filters.keyword) {
      url += `&keyword=${filters.keyword}&`
    }
    if (filters.order_key) {
      url += `&order_key=${filters.order_key}&ascend=${filters.ascend}`
    }

    // append token
    const {auth} = getState() as RootState
    let reqConfig: AxiosRequestConfig = {method: 'GET', url}
    reqConfig =
      auth.isLogin && auth.userData ? {
        ...reqConfig,
        headers: {Authorization: `Bearer ${auth.userData.token}`},
      } : reqConfig

    const res: AxiosResponse = await axios(reqConfig)
    return res.data
  },
)

export const petListSlice = createSlice({
  name: 'petList',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state.filters = action.payload
    },
    togglePetTracking: (state, action) => {
      const {idx} = action.payload
      state.pets[idx].tracking = !state.pets[idx].tracking
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPets.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getPets.fulfilled, (state, action) => {
      state.loading = false
      state.pets = action.payload.pets
      state.totalPage = action.payload.page.total
    })
    builder.addCase(getPets.rejected, (state) => {
      state.loading = false
    })
  },
})

export const {updateFilters, togglePetTracking} = petListSlice.actions
export default petListSlice.reducer
