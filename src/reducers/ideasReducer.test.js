// @flow
import ideasReducer from './ideasReducer'

import * as actionTypes from '../actions/actionTypes'

describe('ideasReducer', () => {
  let fakeReceiveAction
  const fakeResultPayload = {
    id: 1,
    body: 'here\'s body (...)',
    title: 'Title',
    created_date: new Date('2049')
  }

  beforeEach(() => {
    fakeReceiveAction = {
      type: actionTypes.RECEIVE_ALL_IDEAS,
      payload: [ fakeResultPayload ]
    }
  })

  it('should return the initial state', () => {
    expect(ideasReducer(undefined, {})).toEqual([])
  })

  it('should handle RECEIVE_ALL_IDEAS', () => {
    expect(ideasReducer(undefined, fakeReceiveAction)).toEqual(fakeReceiveAction.payload)
  })

  it('should handle RECEIVE_NEW_IDEA', () => {
    fakeReceiveAction.type = actionTypes.RECEIVE_NEW_IDEA
    fakeReceiveAction.payload = fakeResultPayload

    expect(ideasReducer(undefined, fakeReceiveAction)).toEqual([fakeResultPayload])
  })

  it('should handle RECEIVE_UPDATED_IDEA', () => {
    const updatedResult = { ...fakeResultPayload }
    updatedResult.title = 'Updated title'

    fakeReceiveAction.type = actionTypes.RECEIVE_UPDATED_IDEA
    fakeReceiveAction.payload = updatedResult

    expect(ideasReducer([fakeResultPayload], fakeReceiveAction)).toEqual([updatedResult])
  })

  it('should handle RECEIVE_DELETED_IDEA', () => {
    fakeReceiveAction.type = actionTypes.RECEIVE_DELETED_IDEA
    fakeReceiveAction.payload = { id: 1 }

    expect(ideasReducer([fakeResultPayload], fakeReceiveAction)).toEqual([])
  })
})
