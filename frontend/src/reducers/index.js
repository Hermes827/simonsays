import { combineReducers } from 'redux'
// import postsReducer from './postsReducer'
import manageSignupData from './manageSignupData'

const rootReducer = combineReducers({
  data: manageSignupData
})

export default rootReducer
