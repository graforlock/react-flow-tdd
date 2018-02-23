// @flow
import ideasReducer from './ideasReducer'

import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

describe('ideasReducer', () => {
  it('should return the initial state', () => {
    expect(ideasReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle RECEIVE_ALL_IDEAS', () => {
    const fakeReceiveAction = {
      type: actionTypes.RECEIVE_ALL_IDEAS,
      payload: [{}, {}]
    }
    expect(ideasReducer(initialState, fakeReceiveAction)).toEqual(fakeReceiveAction.payload)
  })

  it('should handle RECEIVE_NEW_IDEA', () => {
    const fakeReceiveAction = {
      type: actionTypes.RECEIVE_NEW_IDEA,
      payload: {}
    }
    expect(ideasReducer(initialState, fakeReceiveAction)).toEqual(fakeReceiveAction.payload)
  })
})
