// @flow
import type { EditorStore } from './editorReducer'

type ReduxState = {
  ideas: Array<Object>,
  editor: EditorStore,
  sortOption: ?string
}

const initialState: ReduxState = {
  ideas: [],
  editor: {
    writingMode: false,
    editedIdea: null
  },
  sortOption: null
}

export default initialState
export type { ReduxState }
