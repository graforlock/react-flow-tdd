// @flow
import * as actionTypes from '../actions/actionTypes'
import type { IdeaResults, IdeasReceiveAction } from '../types'

type IdeasStore = IdeaResults

const initialState: IdeasStore = []

const ideasReducer = (state: IdeasStore = initialState, action: IdeasReceiveAction): IdeasStore => {
  switch (action.type) {
    case actionTypes.RECEIVE_ALL_IDEAS:
      return action.payload
    case actionTypes.RECEIVE_NEW_IDEA:
      return [...state, action.payload]
    case actionTypes.RECEIVE_UPDATED_IDEA:
      return state.map(idea =>
        idea.id === action.payload.id
          ? action.payload
          : idea
        )
    case actionTypes.RECEIVE_DELETED_IDEA:
      return state.filter(idea =>
        idea.id !== action.payload.id
      )
    default:
      return state
  }
}

export default ideasReducer

export type { IdeasStore }
