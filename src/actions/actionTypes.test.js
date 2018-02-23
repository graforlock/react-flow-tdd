// @flow
import * as actionTypes from './actionTypes'

describe('actionTypes', () => {
  it('matches the current actionTypes snapshot', () => {
    expect(actionTypes).toMatchSnapshot()
  })
})
