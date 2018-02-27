import {
  EDITOR_EDIT_BODY,
  EDITOR_EDIT_TITLE,
  EDITOR_EDIT_CLEAR,
  EDITOR_ENABLE_WRITING,
  EDITOR_DISABLE_WRITING,
  FETCH_GET_ALL_IDEAS,
  FETCH_CREATE_IDEA,
  FETCH_UPDATE_IDEA,
  FETCH_DELETE_IDEA,
  RECEIVE_ALL_IDEAS,
  RECEIVE_NEW_IDEA,
  RECEIVE_UPDATED_IDEA,
  RECEIVE_DELETED_IDEA,
  REQUEST_GET_ALL_FAILURE,
  REQUEST_CREATE_FAILURE,
  REQUEST_UPDATE_FAILURE,
  REQUEST_DELETE_FAILURE,
  REQUEST_GET_ALL_SUCCESS,
  REQUEST_CREATE_SUCCESS,
  REQUEST_UPDATE_SUCCESS,
  REQUEST_DELETE_SUCCESS
} from '../actions/actionTypes'

type IdeaResult = {
  id: number,
  title: string,
  body: string,
  created_date: Date
}

type IdeaRequest = IdeaResult

type IdeaResults = Array<IdeaResult>

type IdeaIdInfo = {
  id: number
}

type IdeasStore = IdeaResults

type EditingField = 'TITLE' | 'BODY'
type EditingIdea = { id: number, type: EditingField }

type EditorStore = {
    writingMode: boolean,
    editedIdea: ?EditingIdea
}

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

type ReduxState = {
  ideas: Array<Object>,
  editor: EditorStore,
  sortOption: ?string
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

export type {
  IdeaResult,
  IdeaIdInfo,
  IdeaRequest,
  IdeaResults,
  IdeasStore,
  EditingField,
  EditingIdea,
  EditorStore,
  EditorEditAction,
  EditorWriteAction,
  ReduxState,
  IdeasFetchAction,
  IdeasReceiveAction,
  IdeasRequestAction
}
