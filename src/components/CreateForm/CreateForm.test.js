// @flow
import React from 'react'
import configureStore from 'redux-mock-store'
import type { ShallowWrapper } from 'enzyme'
import { shallow } from 'enzyme'

import CreateForm from './CreateForm'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('CreateForm', () => {
  const initialState = {}
  let store
  let wrapper: ShallowWrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<CreateForm onSubmit={jest.fn()} store={store} />)
  })

  it('handles submit event provided valid input', () => {
    wrapper.simulate('submit')
    expect(wrapper.props().onSubmit).toHaveBeenCalled()
  })
})
