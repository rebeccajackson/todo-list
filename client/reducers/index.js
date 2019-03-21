import { combineReducers } from 'redux'

import { todos } from './todos'
import { showError } from './todos'

const rootReducer = combineReducers({
  todos,
  showError
})

export default rootReducer