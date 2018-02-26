// @flow
import { combineReducers } from 'redux'
import ideasReducer from './ideasReducer'

export default combineReducers({
  ideaList: ideasReducer,
  sortOption: null
})
