import type { IdeaResult, IdeaRequest, IdeaResults } from '../services/ideaService'
import type { EditingField } from '../reducers/editorReducer'

export const FETCH_GET_ALL_IDEAS = 'FETCH_GET_ALL_IDEAS'
export const FETCH_CREATE_IDEA = 'FETCH_CREATE_IDEA'
export const FETCH_UPDATE_IDEA = 'FETCH_UPDATE_IDEA'
export const FETCH_DELETE_IDEA = 'FETCH_DELETE_IDEA'

export const RECEIVE_ALL_IDEAS = 'RECEIVE_ALL_IDEAS'
export const RECEIVE_NEW_IDEA = 'RECEIVE_NEW_IDEA'
export const RECEIVE_UPDATED_IDEA = 'RECEIVE_UPDATED_IDEA'
export const RECEIVE_DELETED_IDEA = 'RECEIVE_DELETED_IDEA'

export const REQUEST_GET_ALL_FAILURE = 'REQUEST_GET_ALL_FAILURE'
export const REQUEST_CREATE_FAILURE = 'REQUEST_CREATE_FAILURE'
export const REQUEST_UPDATE_FAILURE = 'REQUEST_UPDATE_FAILURE'
export const REQUEST_DELETE_FAILURE = 'REQUEST_DELETE_FAILURE'

export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

export const REQUEST_GET_ALL_SUCCESS = 'REQUEST_GET_ALL_SUCCESS'
export const REQUEST_CREATE_SUCCESS = 'REQUEST_CREATE_SUCCESS'
export const REQUEST_UPDATE_SUCCESS = 'REQUEST_UPDATE_SUCCESS'
export const REQUEST_DELETE_SUCCESS = 'REQUEST_DELETE_SUCCESS'

export const EDITOR_EDIT_TITLE = 'EDITOR_EDIT_TITLE'
export const EDITOR_EDIT_BODY = 'EDITOR_EDIT_BODY'
export const EDITOR_EDIT_CLEAR = 'EDITOR_EDIT_CLEAR'
export const EDITOR_ENABLE_WRITING = 'EDITOR_ENABLE_WRITING'
export const EDITOR_DISABLE_WRITING = 'EDITOR_DISABLE_WRITING'

type EditorEditAction = {
  type:
  EDITOR_EDIT_BODY |
  EDITOR_EDIT_TITLE |
  EDITOR_EDIT_CLEAR,
  payload: ?EditingField
}

type EditorWriteAction = {
  type:
  EDITOR_ENABLE_WRITING |
  EDITOR_DISABLE_WRITING,
  payload: ?EditingField
}

type IdeasFetchAction = {
  type:
  FETCH_GET_ALL_IDEAS |
  FETCH_CREATE_IDEA |
  FETCH_UPDATE_IDEA |
  FETCH_DELETE_IDEA,
  payload?: number | IdeaRequest
}

type IdeasReceiveAction = {
  type:
  RECEIVE_ALL_IDEAS |
  RECEIVE_NEW_IDEA |
  RECEIVE_UPDATED_IDEA |
  RECEIVE_DELETED_IDEA,
  payload: IdeaResult | IdeaResults
}

type IdeasRequestAction = {
  type:
  REQUEST_GET_ALL_FAILURE |
  REQUEST_CREATE_FAILURE |
  REQUEST_UPDATE_FAILURE |
  REQUEST_DELETE_FAILURE |
  REQUEST_GET_ALL_SUCCESS |
  REQUEST_CREATE_SUCCESS |
  REQUEST_UPDATE_SUCCESS |
  REQUEST_DELETE_SUCCESS,
  payload?: null
}

export type { EditorEditAction, EditorWriteAction, IdeasFetchAction, IdeasReceiveAction, IdeasRequestAction }
