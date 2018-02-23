// @flow
type ReduxState = {
  ideaList: Array<Object>,
  newIdea: ?Object
}

const initialState: ReduxState = {
  ideaList: [],
  newIdea: null
}

export default initialState
export type { ReduxState }
