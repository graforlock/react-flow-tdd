// @flow
type ReduxState = {
  ideas: Array<Object>,
  sortOption: ?string
}

const initialState: ReduxState = {
  ideas: [],
  sortOption: null
}

export default initialState
export type { ReduxState }
