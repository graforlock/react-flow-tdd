// @flow
import React from 'react'
import type { ShallowWrapper } from 'enzyme'
import { shallow } from 'enzyme'

import { TextEditor } from './TextEditor'

describe('TextEditor', () => {
  let wrapper: ShallowWrapper
  const idea = {
    id: 1,
    title: 'Title',
    body: '... body ...',
    created_date: new Date('2049')
  }

  beforeEach(() => {
    wrapper = shallow(
      <TextEditor clearEditor={jest.fn()}
        field='TITLE' idea={idea}
        fetchUpdateIdea={jest.fn()}
        setEditorTitle={jest.fn()}
        setEditorBody={jest.fn()}
        editedIdea={jest.fn()} children={[<div />]} />
      )
  })

  it('renders component and matches current default snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
