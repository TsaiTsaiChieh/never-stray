import thunk from 'redux-thunk'

import {configureStore} from '@reduxjs/toolkit'

import enumReducer from './reducers/enumSlice'
import petListReducer from './reducers/petListSlice'
import uiReducer from './reducers/uiSlice'

const store = configureStore({
  reducer: {
    petList: petListReducer,
    enum: enumReducer,
    ui: uiReducer,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
