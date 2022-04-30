import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {RootState} from '../'
import {PetKind, PetStatus} from '../../constants/EnumType'
import {concatUrl} from '../../utils/helper'

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
    let url = `${process.env.REACT_APP_API_URL}` +
      `/pets?page=${filters.page}&limit=${filters.limit}`
    url += concatUrl(filters.status, 'status')
    url += concatUrl(filters.ref, 'ref')
    url += concatUrl(filters.city_id, 'city_id')
    url += concatUrl(filters.shelter_id, 'shelter_id')
    if (filters.kind !== PetKind.ALL) url += `$kind[]=${filters.kind}`
    url += concatUrl(filters.sex, 'sex')
    url += concatUrl(filters.color, 'color')
    url += concatUrl(filters.age, 'age')
    url += concatUrl(filters.region, 'region')
    url += concatUrl(filters.ligation, 'ligation')
    if (filters.keyword) url += `&keyword=${filters.keyword}`
    if (filters.order_key) {
      url += `&order_key=${filters.order_key}&ascend=${filters.ascend}`
    }
    // append token
    const {auth} = getState() as RootState
    let reqConfig: AxiosRequestConfig = {method: 'GET', url}
    reqConfig =
      auth.isLogin && auth.userData ?
        {
          ...reqConfig,
          headers: {Authorization: `Bearer ${auth.userData.token}`},
        } :
        reqConfig

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

export const {updateFilters, togglePetTracking} =
  petListSlice.actions
export default petListSlice.reducer
