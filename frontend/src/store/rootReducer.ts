import {combineReducers} from 'redux'

import enumReducer from './reducers/enumSlice'
import petListReducer from './reducers/petListSlice'

const rootReducer = combineReducers({
  petList: petListReducer,
  enum: enumReducer,
})

export default rootReducer
