// @flow
import React from 'react'
import { connect } from 'react-redux'
import './IdeaItem.css'
import icon from './trash-icon.svg'

import TextEditor from '../TextEditor'

import { fetchDeleteIdea } from '../../actions'
import type { IdeasFetchAction, IdeaResult } from '../../types'

type Props = {
  idea: IdeaResult,
  fetchDeleteIdea: (ideaId: number) => IdeasFetchAction
}

class IdeaItem extends React.Component<Props> {
  render () {
    const { idea, fetchDeleteIdea } = this.props
    return (
      <li className='idea__item'>
        <section className='idea__item-content'>
          <header className='idea__header'>
            <TextEditor idea={idea} field='TITLE'>
              <h5 className='idea__title'>{idea.title}</h5>
            </TextEditor>
          </header>
          <TextEditor idea={idea} field='BODY'>
            <p className='idea__body'>{idea.body}</p>
          </TextEditor>
        </section>
        <div className='idea__delete-item'>
          <div className='idea__delete-button' onClick={() => fetchDeleteIdea(idea.id)}>
            <img src={icon} className='idea__delete-icon' alt='Delete icon' />
            <button className='idea__delete-text'>Delete</button>
          </div>
        </div>
      </li>
    )
  }
}
export default connect(null, {
  fetchDeleteIdea
})(IdeaItem)
