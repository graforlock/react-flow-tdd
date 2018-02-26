// @flow
import * as ideaService from './ideaService'

describe('ideaService', () => {
  it('exports all CRUD services', () => {
    expect(Object.keys(ideaService)).toBe([
      'getAllIdeas',
      'createIdea',
      'updateIdea',
      'deleteIdea'
    ])
  })
})
