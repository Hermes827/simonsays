import {createStore} from 'redux'
import {reducer} from '../reducers/randomReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(reducer, composeWithDevTools())
