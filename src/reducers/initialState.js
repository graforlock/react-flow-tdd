// @flow
import type { ReduxState } from '../types'

const initialState: ReduxState = {
  ideas: [],
  editor: {
    writingMode: false,
    editedIdea: null
  },
  sortOption: null,
  message: null
}

export default initialState
