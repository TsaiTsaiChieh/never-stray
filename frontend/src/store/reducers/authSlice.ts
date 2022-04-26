import {createSlice} from '@reduxjs/toolkit'

import {authApi} from '../../api/auth'

const initialState: AuthState = {
  isLogin: false,
  email: '',
  token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.googleLogin.matchFulfilled,
      (state, {payload}) => {
        state.isLogin = true
        state.name = payload.name
        state.email = payload.email
        state.picture = payload.picture
        state.token = payload.token
      },
    )
  },
})

export default authSlice.reducer
