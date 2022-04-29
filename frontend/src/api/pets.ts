import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const petsApi = createApi({
  reducerPath: 'pets',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/pets/`,
  }),
  endpoints: (builder) => ({
    getPetById: builder.query<IPet, string>({
      query: (id) => `${id}`,
    }),
  }),
})

export const {useGetPetByIdQuery} = petsApi
