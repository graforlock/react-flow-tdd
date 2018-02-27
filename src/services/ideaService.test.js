// @flow
import * as ideaService from './ideaService'

describe('ideaService', () => {
  it('exports all CRUD services', () => {
    expect(Object.keys(ideaService)).toEqual([
      'getAllIdeas',
      'createIdea',
      'updateIdea',
      'deleteIdea'
    ])
  })
})
