// @flow
type ReduxState = {
  ideaList: Array<Object>,
  sortOption: ?string
}

const initialState: ReduxState = {
  ideaList: [],
  sortOption: null
}

export default initialState
export type { ReduxState }
