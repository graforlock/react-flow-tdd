// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './IdeaSection.css'

import { fetchCreateIdea } from '../../actions'
import type { IdeasFetchAction } from '../../actions/actionTypes'
import type { IdeaRequest } from '../../services/ideaService'

import IdeaItem from '../IdeaItem'
import CreateIdea from '../CreateIdea'
import type { IdeasStore } from '../../reducers/ideasReducer'

type Props = {
  ideas: IdeasStore,
  fetchCreateIdea: (idea: IdeaRequest) => IdeasFetchAction
}

class IdeaSection extends Component<Props> {
  render () {
    const { ideas } = this.props

    return (
      <section className='idea__section'>
        <ul className='idea__list'>
          { ideas.map(idea => <IdeaItem key={idea.id} idea={idea} />) }
        </ul>
        <section className='idea__create'>
          <CreateIdea />
        </section>
      </section>
    )
  }
}

const mapStateToProps = ({ ideas }) => {
  return { ideas }
}

export default connect(mapStateToProps, {
  fetchCreateIdea
})(IdeaSection)
