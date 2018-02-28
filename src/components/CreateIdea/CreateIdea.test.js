// @flow
import React from 'react'
import type { ShallowWrapper } from 'enzyme'
import { shallow } from 'enzyme'

import { CreateIdea } from './CreateIdea'

describe('CreateIdea', () => {
  let wrapper: ShallowWrapper
  let fetchCreateIdea

  beforeEach(() => {
    fetchCreateIdea = jest.fn()
    wrapper = shallow(
      <CreateIdea enableEditorWriting={jest.fn()}
        fetchCreateIdea={fetchCreateIdea} writingMode={false} />
      )
  })

  it('renders component and matches current default snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders component and matches snapshot when writingMode is true', () => {
    wrapper.setProps({ writingMode: true })
    expect(wrapper).toMatchSnapshot()
  })

  it('contains a working ReduxForm that creates a new idea', () => {
    wrapper.setProps({ writingMode: true })
    wrapper.find('ReduxForm').simulate('submit')
    expect(fetchCreateIdea).toHaveBeenCalled()
  })
})
