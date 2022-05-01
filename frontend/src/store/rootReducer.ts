import {combineReducers} from 'redux'

import {api} from '../services/api'
import authReducer from './reducers/authSlice'
import enumReducer from './reducers/enumSlice'
import petListReducer from './reducers/petListSlice'
import uiReducer from './reducers/uiSlice'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  petList: petListReducer,
  enum: enumReducer,
  ui: uiReducer,
  auth: authReducer,
})

export default rootReducer
