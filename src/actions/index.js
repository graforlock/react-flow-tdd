// @flow
import * as actionTypes from './actionTypes'
import type { IdeaRequest } from '../services/ideaService'

export const fetchGetAllIdeas = () => ({
  type: actionTypes.FETCH_GET_ALL_IDEAS
})

export const fetchCreateIdea = (idea: IdeaRequest) => ({
  type: actionTypes.FETCH_GET_ALL_IDEAS,
  payload: idea
})

export const fetchUpdateIdea = (idea: IdeaRequest) => ({
  type: actionTypes.FETCH_UPDATE_IDEA,
  payload: idea
})

export const fetchDeleteIdea = (ideaId: number) => ({
  type: actionTypes.FETCH_DELETE_IDEA,
  payload: ideaId
})
