import {createSlice} from '@reduxjs/toolkit'
import {api} from '../../services/api'


const initialState: EnumState = {
  colors: [],
  cities: [],
  shelters: [],
}

export const enumSlice = createSlice({
  name: 'enum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPetColors.matchFulfilled,
      (state, {payload}) => {
        state.colors = payload
      },
    )
    builder.addMatcher(
      api.endpoints.getPetCities.matchFulfilled,
      (state, {payload}) => {
        state.cities = payload.map((ele: CityAPIType) => ({
          id: ele.id,
          name: ele.name,
        }))
      },
    )
    builder.addMatcher(
      api.endpoints.getPetShelters.matchFulfilled,
      (state, {payload}) => {
        state.shelters = payload.map((ele: IDAndNameType) => ({
          id: ele.id,
          name: ele.name,
        }))
      },
    )
  },
})

export default enumSlice.reducer
