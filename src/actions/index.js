// @flow
import * as actionTypes from './actionTypes'
import type { IdeaRequest } from '../services/ideaService'

export const fetchGetAllIdeas = () => ({
  type: actionTypes.FETCH_GET_ALL_IDEAS
})

export const fetchCreateIdea = (idea: IdeaRequest) => ({
  type: actionTypes.FETCH_CREATE_IDEA,
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

export const setEditorBody = (ideaId: number) => ({
  type: actionTypes.EDITOR_EDIT_BODY,
  payload: ideaId
})

export const setEditorTitle = (ideaId: number) => ({
  type: actionTypes.EDITOR_EDIT_TITLE,
  payload: ideaId
})

export const clearEditor = () => ({
  type: actionTypes.EDITOR_EDIT_CLEAR
})

export const enableEditorWriting = () => ({
  type: actionTypes.EDITOR_ENABLE_WRITING
})

export const disableEditorWriting = () => ({
  type: actionTypes.EDITOR_DISABLE_WRITING
})
