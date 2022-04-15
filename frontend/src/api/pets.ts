import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const {REACT_APP_API_URL} = process.env

export const petsApi = createApi({
  reducerPath: 'pets',
  baseQuery: fetchBaseQuery({baseUrl: REACT_APP_API_URL}),
  endpoints: (builder) => ({
    getPetById: builder.query<IPet, string>({
      query: (id) => `/pets/${id}`,
    }),
  }),
})

export const {useGetPetByIdQuery} = petsApi
