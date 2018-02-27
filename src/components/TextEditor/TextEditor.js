// @flow
import React from 'react'
import { connect } from 'react-redux'

import { fetchUpdateIdea, setEditorBody, setEditorTitle, clearEditor } from '../../actions'
import type { ChildrenArray } from 'react'
import type { EditingIdea, EditingField } from '../../reducers/editorReducer'
import type { IdeaRequest } from '../../services/ideaService'
import type { IdeasFetchAction } from '../../actions/actionTypes'

type State = {
  editing: boolean,
  letterCount: ?number
}

type Props = {
  children: ChildrenArray<any>[],
  idea: IdeaRequest,
  field: EditingField,
  editedIdea: ?EditingIdea,
  fetchUpdateIdea: (idea: IdeaRequest) => IdeasFetchAction,
  setEditorBody: Function,
  setEditorTitle: Function,
  clearEditor: Function
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
    const { field, idea, setEditorBody, setEditorTitle } = this.props
    if (field === 'TITLE') setEditorTitle(idea.id)
    if (field === 'BODY') setEditorBody(idea.id)
    // const { editing } = this.state
    // this.setState({ editing: !editing })
  }

  handleBlur = (e) => {
    const { clearEditor, idea, field } = this.props
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
    clearEditor()
  }

  renderChildren (): ChildrenArray<any>[] {
    const { children } = this.props
    return React.Children.map(children, (element) =>
        React.cloneElement(element, { onClick: this.switchMode }))
  }

  render () {
    const { editedIdea, idea, field } = this.props
    const { letterCount } = this.state
    const displayCount = letterCount && letterCount <= 15
    return (
      <section className='texteditor__container'>
        { editedIdea && editedIdea.id === idea.id && editedIdea.type === field
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

const mapStateToProps = ({ editor: { editedIdea } }) => {
  return { editedIdea }
}

export default connect(mapStateToProps, {
  setEditorBody,
  setEditorTitle,
  clearEditor,
  fetchUpdateIdea
})(TextEditor)
