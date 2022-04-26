import {createSlice} from '@reduxjs/toolkit'

import {authApi} from '../../api/auth'

const initialState: AuthState = {
  isLogin: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLogin = false
      delete state.userData
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.googleLogin.matchFulfilled,
      (state, {payload}) => {
        state.isLogin = true
        state.userData = payload
      },
    )
  },
})

export const {logout} = authSlice.actions
export default authSlice.reducer
