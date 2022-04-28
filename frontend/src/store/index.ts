import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {configureStore} from '@reduxjs/toolkit'

import {authApi} from '../api/auth'
import {petsApi} from '../api/pets'
import {trackingApi} from '../api/tracking'
import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [authApi.reducerPath, 'auth', 'enum'],
  blacklist: [petsApi.reducerPath, 'petList', 'ui', trackingApi.reducerPath],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(petsApi.middleware, authApi.middleware, trackingApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
