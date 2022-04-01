import axios, {AxiosResponse} from 'axios'

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {RootState} from '..'

const {REACT_APP_API_URL} = process.env

const initialState: EnumState = {
  colors: [],
}

export const getPetColors = createAsyncThunk(
  'petList/fetchColors',
  async () => {
    const url = `${REACT_APP_API_URL}/enum/color`
    const res: AxiosResponse = await axios({method: 'GET', url})
    return res.data
  },
)

export const enumSlice = createSlice({
  name: 'enum',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(getPetColors.fulfilled, (state, action) => {
      state.colors = action.payload
    }),
})

export const selectEnum = (state: RootState) => state.enum
export default enumSlice.reducer
