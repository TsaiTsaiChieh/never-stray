import logger from 'redux-logger'
import thunk from 'redux-thunk'

import {configureStore} from '@reduxjs/toolkit'

import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
