// @flow
import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import type { MockStore } from 'redux-mock-store'
import type { ShallowWrapper } from 'enzyme'
import { mount } from 'enzyme'

import IdeaSection from './IdeaSection'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('IdeaSection', () => {
  const idea = {
    id: 1,
    title: 'Title',
    body: '... body ...',
    created_date: new Date()
  }
  const initialState = { ideas: [idea], editor: { writingMode: false } }
  let wrapper: ShallowWrapper
  let store: MockStore<any>

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = mount(<Provider store={store}><IdeaSection /></Provider>)
  })

  it('renders component and matches current snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('contains IdeaItems components', () => {
    expect(wrapper.find('IdeaItem').length).not.toBe(0)
  })
})
