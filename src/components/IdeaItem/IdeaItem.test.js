// @flow
import React from 'react'
import type { ShallowWrapper } from 'enzyme'
import { shallow } from 'enzyme'

import { IdeaItem } from './IdeaItem'

describe('IdeaItem', () => {
  let wrapper: ShallowWrapper
  let mockFetchDeleteIdea
  const idea = {
    id: 1,
    title: 'Title',
    body: '... body ...',
    created_date: new Date('2049')
  }

  beforeEach(() => {
    mockFetchDeleteIdea = jest.fn()
    wrapper = shallow(<IdeaItem idea={idea} fetchDeleteIdea={mockFetchDeleteIdea} />)
  })

  it('renders component and matches current default snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('sends a valid id for idea deletion upon click', () => {
    wrapper.find('.idea__delete-button').simulate('click')

    expect(mockFetchDeleteIdea).toHaveBeenCalledWith(1)
  })
})
