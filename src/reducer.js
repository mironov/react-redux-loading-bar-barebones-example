import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  // app reducers
  loadingBar: loadingBarReducer,
})

export default rootReducer
