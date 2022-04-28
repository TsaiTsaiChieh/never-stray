import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {RootState} from '../store'

export const trackingApi = createApi({
  reducerPath: 'tracking',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/tracking`,
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).auth.userData?.token
      if (token) headers.set('authorization', `Bearer ${token}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    addTrackingApi: builder.mutation<string, {pet_id: number}>({
      query: (pet_id) => ({
        url: '',
        method: 'POST',
        body: pet_id,
      }),
    }),
    removeTrackingApi: builder.mutation<string, {pet_id: number}>({
      query: (pet_id) => ({
        url: '',
        method: 'DELETE',
        body: pet_id,
      }),
    }),
  }),
})

export const {useAddTrackingApiMutation, useRemoveTrackingApiMutation} =
  trackingApi
