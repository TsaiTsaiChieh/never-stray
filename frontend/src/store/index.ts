import {configureStore} from '@reduxjs/toolkit'
import {authApi} from '../api/auth'

import {petsApi} from '../api/pets'
import enumReducer from './reducers/enumSlice'
import petListReducer from './reducers/petListSlice'
import uiReducer from './reducers/uiSlice'

const store = configureStore({
  reducer: {
    [petsApi.reducerPath]: petsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    petList: petListReducer,
    enum: enumReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petsApi.middleware, authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
