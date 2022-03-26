import {combineReducers} from 'redux'

import petReducer from './pet/reducer'

const rootReducer = combineReducers({
  pet: petReducer,
})

export default rootReducer
