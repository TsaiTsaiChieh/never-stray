import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {PetKind} from '../constants/EnumType'
import {RootState} from '../store'
import {concatUrl} from '../utils/helper'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['auth', 'pets', 'enum'],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, {getState}) => {
      const token = (getState() as RootState).auth.userData?.token
      if (token) headers.set('authorization', `Bearer ${token}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    /** Auth */
    googleLogin: builder.mutation<UserInfoType, {token: string}>({
      query: (token) => ({
        url: '/auth/google-login',
        method: 'POST',
        body: token,
      }),
      invalidatesTags: ['auth'],
    }),
    /** Pets */
    getPetById: builder.query<IPet, string>({
      query: (id) => `/pets/${id}`,
      providesTags: ['pets'],
    }),
    getPetsByFilters: builder.query<PetsAPIType, SearchPetFilters>({
      query: ({
        page,
        limit,
        status,
        ref,
        city_id,
        shelter_id,
        kind,
        sex,
        color,
        age,
        region,
        ligation,
        keyword,
        tracking,
        order_key,
        ascend,
      }) => {
        let url = `/pets?page=${page}&limit=${limit}`
        url += concatUrl(status, 'status')
        url += concatUrl(ref, 'ref')
        url += concatUrl(city_id, 'city_id')
        url += concatUrl(shelter_id, 'shelter_id')
        if (kind !== PetKind.ALL) url += `&kind[]=${kind}`
        url += concatUrl(sex, 'sex')
        url += concatUrl(color, 'color')
        url += concatUrl(age, 'age')
        url += concatUrl(region, 'region')
        url += concatUrl(ligation, 'ligation')
        if (tracking) url += `&tracking=${tracking}`
        if (keyword) url += `&keyword=${keyword}`
        if (order_key) url += `&order_key=${order_key}&ascend=${ascend}`
        return {
          url,
          method: 'GET',
        }
      },
      providesTags: ['pets'],
    }),
    addTracking: builder.mutation<string, {pet_id: number}>({
      query: (pet_id) => ({
        url: '/tracking',
        method: 'POST',
        body: pet_id,
      }),
      invalidatesTags: ['pets'],
    }),
    removeTracking: builder.mutation<string, {pet_id: number}>({
      query: (pet_id) => ({
        url: '/tracking',
        method: 'DELETE',
        body: pet_id,
      }),
      invalidatesTags: ['pets'],
    }),
    /** Enum */
    getPetColors: builder.query<string[], void>({
      query: () => ({
        url: '/enum/color',
        method: 'GET',
      }),
      providesTags: ['enum'],
    }),
    getPetCities: builder.query<CityAPIType[], void>({
      query: () => ({
        url: '/enum/city',
        method: 'GET',
      }),
      providesTags: ['enum'],
    }),
    getPetShelters: builder.query<IDAndNameType[], void>({
      query: () => ({
        url: '/enum/shelter',
        method: 'GET',
      }),
      providesTags: ['enum'],
    }),
  }),
})

export const {
  useGoogleLoginMutation,
  useGetPetByIdQuery,
  useGetPetsByFiltersQuery,
  useAddTrackingMutation,
  useRemoveTrackingMutation,
} = api
