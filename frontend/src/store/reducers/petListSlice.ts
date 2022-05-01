import {createSlice} from '@reduxjs/toolkit'

import {PetKind, PetStatus} from '../../constants/EnumType'

const initialState: PetListState = {
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
    tracking: false,
    limit: 18,
    page: 1,
    ascend: true,
  },
}


export const petListSlice = createSlice({
  name: 'petList',
  initialState,
  reducers: {
    updateFilters: (state, action) => {
      state.filters = action.payload
    },
  },
})

export const {updateFilters} = petListSlice.actions
export default petListSlice.reducer
