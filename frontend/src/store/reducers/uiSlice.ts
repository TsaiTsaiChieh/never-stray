import {isDesktop, isMobile} from 'react-device-detect'

import {createSlice} from '@reduxjs/toolkit'

const initialState: UIState = {
  searchBoardIsShow: isDesktop,
  searchMaskIsShow: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    filterBtnOnClick: (state) => {
      state.searchBoardIsShow = true
      if (isMobile) state.searchMaskIsShow = true
    },
    closeSearchBoard: (state) => {
      state.searchBoardIsShow = false
      if (isMobile) state.searchMaskIsShow = false
    },
  },
})

export const {filterBtnOnClick, closeSearchBoard} = uiSlice.actions
export default uiSlice.reducer
