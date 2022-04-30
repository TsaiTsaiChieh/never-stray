import {createSlice} from '@reduxjs/toolkit'

import {petsApi} from '../../api/pets'
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
    builder.addMatcher(
      petsApi.endpoints.getPetsByFilters.matchPending,
      (state) => {
        state.loading = true
      },
    )
    builder.addMatcher(
      petsApi.endpoints.getPetsByFilters.matchFulfilled,
      (state, {payload}) => {
        state.loading = false
        state.totalPage = payload.page.total
      },
    )
  },
})

export const {updateFilters, togglePetTracking} =
  petListSlice.actions
export default petListSlice.reducer
