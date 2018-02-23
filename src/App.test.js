// @flow
import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = <App />
  })

  it('renders component and matches current snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
