import {isDesktop} from 'react-device-detect'

import {createSlice} from '@reduxjs/toolkit'

const initialState: UIState = {
  searchBoardIsShow: isDesktop,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    filterBtnOnClick: (state) => {
      state.searchBoardIsShow = true
    },
    closeSearchBoard: (state) => {
      state.searchBoardIsShow = false
    },
  },
})

export const {filterBtnOnClick, closeSearchBoard} = uiSlice.actions
export default uiSlice.reducer
