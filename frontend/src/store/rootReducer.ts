import {combineReducers} from 'redux'

import enumReducer from './reducers/enumSlice'
import petListReducer from './reducers/petListSlice'
import uiReducer from './reducers/uiSlice'

const rootReducer = combineReducers({
  petList: petListReducer,
  enum: enumReducer,
  ui: uiReducer,
})

export default rootReducer
