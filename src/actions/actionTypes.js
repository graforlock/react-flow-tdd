export const FETCH_GET_ALL_IDEAS = 'FETCH_GET_ALL_IDEAS'
export const FETCH_GET_NEW_IDEA = 'FETCH_GET_NEW_IDEA'
export const FETCH_UPDATE_IDEA = 'FETCH_UPDATE_IDEA'
export const FETCH_DELETE_IDEA = 'FETCH_DELETE_IDEA'

export const RECEIVE_ALL_IDEAS = 'RECEIVE_ALL_IDEAS'
export const RECEIVE_NEW_IDEA = 'RECEIVE_NEW_IDEA'

type IdeasFetchAction = {
  type:
  FETCH_GET_ALL_IDEAS |
  FETCH_GET_NEW_IDEA |
  FETCH_UPDATE_IDEA |
  FETCH_DELETE_IDEA,
  payload: ?number
}

type IdeasReceiveAction = {
  type:
  RECEIVE_ALL_IDEAS |
  RECEIVE_NEW_IDEA,
  payload: Array<Object>
}

export type { IdeasFetchAction, IdeasReceiveAction }
