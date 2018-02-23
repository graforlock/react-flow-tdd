// @flow
import * as actionTypes from '../actions/actionTypes'
import type { IdeasFetchAction } from '../actions/actionTypes'
import initialState from './initialState'
import type { ReduxState } from './initialState'

const _initialState: ReduxState = initialState

const ideasReducer = (state: ReduxState = _initialState, action: IdeasFetchAction): ReduxState => {
  switch (action.type) {
    case actionTypes.RECEIVE_ALL_IDEAS:
      const ideaList = action.payload
      return { ...state, ideaList }
    case actionTypes.RECEIVE_NEW_IDEA:
      const newIdea = action.payload
      return { ...state, newIdea }
    default:
      return initialState
  }
}

export default ideasReducer
