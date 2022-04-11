import {isDesktop, isMobile} from 'react-device-detect'

import {createSlice} from '@reduxjs/toolkit'

const initialState: UIState = {
  searchBoardIsShow: isDesktop, // 搜尋選單
  searchMaskIsShow: false, // 搜尋選單開啟時的遮罩
  keywordSearchTextFieldIsShow: isDesktop, // 文字搜尋輸入框
  kindContainerIsShow: true, // 菜單上的寵物種類
  filterBtnIsShow: !isDesktop, // 菜單上的開啟搜尋選單按鈕
  closeTextSearchIsShow: false, // 關閉文字搜尋輸入框
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // 菜單篩選按鈕的點擊事件（手機/平板）
    filterBtnOnClick: (state) => {
      state.searchBoardIsShow = true
      if (isMobile) state.searchMaskIsShow = true
    },
    // 搜尋關閉按鈕的點擊事件（手機/平板）
    closeSearchBoard: (state) => {
      state.searchBoardIsShow = false
      if (isMobile) state.searchMaskIsShow = false
    },
    // 關鍵字搜尋的按鈕點擊事件 （手機）
    keywordSearchOnClick: (state) => {
      state.keywordSearchTextFieldIsShow = true
      state.kindContainerIsShow = false
      state.filterBtnIsShow = false
      state.closeTextSearchIsShow = true
    },
    // 關閉關鍵字搜尋（手機）
    closeKeywordSearch: (state) => {
      state.keywordSearchTextFieldIsShow = false
      state.kindContainerIsShow = true
      state.filterBtnIsShow = true
      state.closeTextSearchIsShow = false
    },
  },
})

export const {
  filterBtnOnClick,
  closeSearchBoard,
  keywordSearchOnClick,
  closeKeywordSearch,
} = uiSlice.actions
export default uiSlice.reducer
