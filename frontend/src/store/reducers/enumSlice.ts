import axios, {AxiosResponse} from 'axios'

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

import {RootState} from '../'

const {REACT_APP_API_URL} = process.env

const initialState: EnumState = {
  colors: [],
  cities: [],
}

export const getPetColors = createAsyncThunk(
  'petList/fetchColors',
  async () => {
    const url = `${REACT_APP_API_URL}/enum/color`
    const res: AxiosResponse = await axios({method: 'GET', url})
    return res.data
  },
)

export const getCities = createAsyncThunk(
  'petList/fetchCities',
  async () => {
    const url = `${REACT_APP_API_URL}/enum/city`
    const res: AxiosResponse = await axios({method: 'GET', url})
    const data: CityAPIType[] = res.data
    return data
  },
)

export const enumSlice = createSlice({
  name: 'enum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPetColors.fulfilled, (state, action) => {
      state.colors = action.payload
    })
    builder.addCase(
      getCities.fulfilled,
      (state, action: PayloadAction<CityAPIType[]>) => {
        state.cities = action.payload.map((ele: CityAPIType) => ({
          id: ele.id,
          name: ele.name,
        }))
      },
    )
  },
})

export const selectEnum = (state: RootState) => state.enum
export default enumSlice.reducer
