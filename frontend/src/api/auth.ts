import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
  endpoints: (builder) => ({
    googleLogin: builder.mutation<UserInfoType, {token: string}>({
      query: (token) => (
        {
          url: `/auth/google-login`,
          method: 'POST',
          body: token,
        }),
    }),
  }),
})

export const {useGoogleLoginMutation} = authApi
