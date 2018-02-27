// @flow
import * as actionTypes from '../actions/actionTypes'
import type { MessageReceiveAction } from '../types'

type MessageStore = ?string

const initialState: MessageStore = null

const ideasReducer = (state: MessageStore = initialState, action: MessageReceiveAction): MessageStore => {
  switch (action.type) {
    case actionTypes.REQUEST_CREATE_SUCCESS:
      return 'Failed to fetch ideas!'
    case actionTypes.REQUEST_UPDATE_SUCCESS:
      return 'Failed to fetch ideas!'
    case actionTypes.REQUEST_DELETE_SUCCESS:
      return 'Failed to fetch ideas!'
    case actionTypes.REQUEST_GET_ALL_FAILURE:
      return 'Failed to fetch ideas!'
    case actionTypes.REQUEST_CREATE_FAILURE:
      return 'Failed to create a new idea!'
    case actionTypes.REQUEST_UPDATE_FAILURE:
      return 'Failed to update an idea!'
    case actionTypes.REQUEST_DELETE_FAILURE:
      return 'Failed to delete an idea!'
    default:
      return state
  }
}

export default ideasReducer
