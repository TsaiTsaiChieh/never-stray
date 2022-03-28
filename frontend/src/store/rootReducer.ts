import {combineReducers} from 'redux'
import petListReducer from './reducers/petListSlice'

const rootReducer = combineReducers({
  petList: petListReducer,
})

export default rootReducer
