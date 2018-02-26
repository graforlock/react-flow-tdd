// @flow
import React from 'react'
import { connect } from 'react-redux'

import { fetchUpdateIdea } from '../../actions'
import type { IdeaRequest } from '../../services/ideaService'
import type { IdeasFetchAction } from '../../actions/actionTypes'

type EditingField = 'TITLE' | 'BODY'

type State = {
  editing: boolean
}

type Props = {
  idea: IdeaRequest,
  field: EditingField,
  fetchUpdateIdea: (idea: IdeaRequest) => IdeasFetchAction
}

class TextEditor extends React.Component<Props, State> {
  state: State = {
    editing: false
  }

  switchMode = () => {
    const { editing } = this.state
    this.setState({ editing: !editing })
  }

  handleBlur = (e) => {
    const { idea, field } = this.props
    const { target: { value } } = e
    if (field === 'TITLE') {
      this.props.fetchUpdateIdea({
        ...idea, ...{ title: value }
      })
    } else if (field === 'BODY') {
      this.props.fetchUpdateIdea({
        ...idea, ...{ body: value }
      })
    }
    this.setState({ editing: false })
  }

  render () {
    const { idea: { title, body }, field } = this.props
    const { editing } = this.state
    const defaultValue = field === 'TITLE' ? title : body

    if (editing) {
      return (
        <textarea className='idea__textarea'
          autoFocus defaultValue={defaultValue}
          onBlur={e => this.handleBlur(e)}
        />
      )
    }

    if (field === 'TITLE') {
      return <h5 onClick={this.switchMode}>{title}</h5>
    }

    if (field === 'BODY') {
      return <p className='idea__body' onClick={this.switchMode}>{body}</p>
    }
  }
}

export default connect(null, {
  fetchUpdateIdea
})(TextEditor)
