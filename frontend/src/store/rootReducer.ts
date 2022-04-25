import {combineReducers} from 'redux'

import {authApi} from '../api/auth'
import {petsApi} from '../api/pets'
import enumReducer from './reducers/enumSlice'
import petListReducer from './reducers/petListSlice'
import uiReducer from './reducers/uiSlice'

const rootReducer = combineReducers({
  [petsApi.reducerPath]: petsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  petList: petListReducer,
  enum: enumReducer,
  ui: uiReducer,
})

export default rootReducer
