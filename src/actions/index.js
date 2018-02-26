// @flow
import actionTypes from './actionTypes'

export const fetchGetAllIdeas = () => ({
  type: actionTypes.FETCH_GET_ALL_IDEAS
})

export const fetchCreateIdea = (ideaId: number) => ({
  type: actionTypes.FETCH_GET_ALL_IDEAS,
  payload: ideaId
})

export const fetchUpdateIdea = (ideaId: number) => ({
  type: actionTypes.FETCH_UPDATE_IDEA,
  payload: ideaId
})

export const fetchDeleteIdea = (ideaId: number) => ({
  type: actionTypes.FETCH_DELETE_IDEA,
  payload: ideaId
})
