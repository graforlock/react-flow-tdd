// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './IdeaSection.css'

import { fetchCreateIdea } from '../../actions'
import type { IdeasFetchAction, IdeaRequest, IdeasStore } from '../../types'

import IdeaItem from '../IdeaItem'
import CreateIdea from '../CreateIdea'

type Props = {
  ideas: IdeasStore,
  message: ?string,
  fetchCreateIdea: (idea: IdeaRequest) => IdeasFetchAction
}

class IdeaSection extends Component<Props> {
  render () {
    const { ideas, message } = this.props

    return (
      <section className='idea__section'>
        <ul className='idea__list'>
          { ideas.map(idea => <IdeaItem key={idea.id} idea={idea} />) }
        </ul>
        { message && <span>{ message }</span> }
        <section className='idea__create'>
          <CreateIdea />
        </section>
      </section>
    )
  }
}

const mapStateToProps = ({ ideas, message }) => {
  return { ideas, message }
}

export default connect(mapStateToProps, {
  fetchCreateIdea
})(IdeaSection)
