// @flow
import React from 'react'
import type { ShallowWrapper } from 'enzyme'
import { shallow } from 'enzyme'

import IdeaSection from './IdeaSection'

describe('IdeaSection', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<IdeaSection />)
  })

  it('renders component and matches current snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('contains IdeaItems components', () => {
    expect(wrapper.find('IdeaItem').length).not.toBe(0)
  })
})
