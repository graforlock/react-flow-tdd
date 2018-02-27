// @flow
import * as actionTypes from '../actions/actionTypes'
import type { IdeaIdInfo, IdeaResult, IdeaResults, IdeasReceiveAction } from '../types'

type IdeasStore = IdeaResults

const initialState: IdeasStore = []

const ideasReducer = (state: IdeasStore = initialState, action: IdeasReceiveAction): IdeasStore => {
  switch (action.type) {
    case actionTypes.RECEIVE_ALL_IDEAS:
      return action.payload
    case actionTypes.RECEIVE_NEW_IDEA:
      const newIdea: IdeaResult = action.payload
      return [...state, newIdea]
    case actionTypes.RECEIVE_UPDATED_IDEA:
      const updatedIdea: IdeaResult = action.payload
      return state.map(idea =>
        idea.id === updatedIdea.id ? updatedIdea : idea
      )
    case actionTypes.RECEIVE_DELETED_IDEA:
      const deletedIdea: IdeaIdInfo = action.payload
      return state.filter(idea =>
        idea.id !== deletedIdea.id
      )
    default:
      return state
  }
}

export default ideasReducer

export type { IdeasStore }
