// @flow
import * as actionTypes from '../actions/actionTypes'
import type { EditorEditAction, EditorWriteAction } from '../actions/actionTypes'

type EditingField = 'TITLE' | 'BODY'
type EditingIdea = { id: number, type: EditingField }

type EditorStore = {
    writingMode: boolean,
    editedIdea: ?EditingIdea
}

const initialState: EditorStore = {
  writingMode: false,
  editedIdea: null
}

const editorReducer = (state: EditorStore = initialState,
    action: EditorEditAction | EditorWriteAction): EditorStore => {
  switch (action.type) {
    case actionTypes.EDITOR_EDIT_BODY:
      return {
        ...state,
        ...{ editedIdea: { id: action.payload, type: 'BODY' } }
      }
    case actionTypes.EDITOR_EDIT_TITLE:
      return {
        ...state,
        ...{ editedIdea: { id: action.payload, type: 'TITLE' } }
      }
    case actionTypes.EDITOR_EDIT_CLEAR:
      return {
        ...state,
        ...{ editedIdea: null }
      }
    case actionTypes.EDITOR_ENABLE_WRITING:
      return {
        ...state,
        ...{ writingMode: true }
      }
    case actionTypes.EDITOR_DISABLE_WRITING:
      return {
        ...state,
        ...{ writingMode: false }
      }
    default:
      return state
  }
}

export default editorReducer

export type { EditingIdea, EditorStore, EditingField }
