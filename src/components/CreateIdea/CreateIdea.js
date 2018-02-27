// @flow
import React from 'react'
import { connect } from 'react-redux'

import { fetchCreateIdea, enableEditorWriting, disableEditorWriting } from '../../actions'

import CreateForm from '../CreateForm'

type Props = {
  writingMode: boolean,
  fetchCreateIdea: Function,
  enableEditorWriting: Function,
  disableEditorWriting: Function
}

const CreateIdea = ({ fetchCreateIdea, writingMode, enableEditorWriting, disableEditorWriting }: Props) => {
  const handleSubmit = e => {
    fetchCreateIdea(e)
  }

  return writingMode
          ? <section>
            <CreateForm onSubmit={handleSubmit} />
            <button onClick={disableEditorWriting}>Close</button>
          </section>
          : <button onClick={enableEditorWriting}>Add a new Idea</button>
}

const mapStateToProps = ({ editor: { writingMode } }) => {
  return { writingMode }
}

export default connect(mapStateToProps, {
  fetchCreateIdea,
  enableEditorWriting,
  disableEditorWriting
})(CreateIdea)
