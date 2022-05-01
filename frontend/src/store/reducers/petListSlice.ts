import {createSlice} from '@reduxjs/toolkit'

import {PetKind, PetStatus} from '../../constants/EnumType'
import {api} from '../../services/api'

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
  totalPage: 1,
}


export const petListSlice = createSlice({
  name: 'petList',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state.filters = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPetsByFilters.matchPending,
      (state) => {
        state.loading = true
      },
    )
    builder.addMatcher(
      api.endpoints.getPetsByFilters.matchFulfilled,
      (state, {payload}) => {
        state.loading = false
        state.totalPage = payload.page.total
      },
    )
  },
})

export const {updateFilters} = petListSlice.actions
export default petListSlice.reducer
