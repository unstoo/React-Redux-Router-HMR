import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  state: (state = { default: 'An undefined state.'}) => state,
  head: () => 42
})

export default rootReducer