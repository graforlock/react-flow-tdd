// @flow
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import ideasReducer from './ideasReducer'
import editorReducer from './editorReducer'
import messageReducer from './messageReducer'

export default combineReducers({
  editor: editorReducer,
  form: formReducer,
  ideas: ideasReducer,
  message: messageReducer,
  sortOption: null
})
