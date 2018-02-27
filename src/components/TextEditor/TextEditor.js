// @flow
import React from 'react'
import { connect } from 'react-redux'

import { fetchUpdateIdea } from '../../actions'
import type { ChildrenArray } from 'react'
import type { IdeaRequest } from '../../services/ideaService'
import type { IdeasFetchAction } from '../../actions/actionTypes'

type EditingField = 'TITLE' | 'BODY'

type State = {
  editing: boolean,
  letterCount: ?number
}

type Props = {
  children: ChildrenArray<any>[],
  idea: IdeaRequest,
  field: EditingField,
  fetchUpdateIdea: (idea: IdeaRequest) => IdeasFetchAction
}

const MAX_LENGTH: number = 75

class TextEditor extends React.Component<Props, State> {
  state: State = {
    editing: false,
    letterCount: null
  }

  handleInput = e => {
    const newCount: number = MAX_LENGTH - e.target.value.length
    this.setState({ letterCount: newCount })
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

  renderChildren (): ChildrenArray<any>[] {
    const { children } = this.props
    return React.Children.map(children, (element) =>
        React.cloneElement(element, { onClick: this.switchMode }))
  }

  render () {
    const { idea, field } = this.props
    const { editing, letterCount } = this.state
    const displayCount = letterCount && letterCount <= 15
    return (
      <section className='texteditor__container'>
        { editing
          ? <textarea className='idea__textarea' maxLength={MAX_LENGTH}
            autoFocus defaultValue={idea[field.toLowerCase()]}
            onBlur={e => this.handleBlur(e)}
            onInput={e => this.handleInput(e)}
          />
          : this.renderChildren() }
        <div>{ displayCount && letterCount }</div>
      </section>
    )
  }
}

export default connect(null, {
  fetchUpdateIdea
})(TextEditor)
