// @flow
import React from 'react'
import { connect } from 'react-redux'

import { fetchCreateIdea, enableEditorWriting, disableEditorWriting } from '../../actions'

import CreateForm from '../CreateForm'
import './CreateIdea.css'

type Props = {
  writingMode: boolean,
  fetchCreateIdea: Function,
  enableEditorWriting: Function,
  disableEditorWriting: Function
}

const CreateIdea = ({
  fetchCreateIdea,
  writingMode,
  enableEditorWriting,
  disableEditorWriting,
  resetForm
}: Props) => {
  const handleSubmit = e => {
    fetchCreateIdea(e)
  }
  const blueVariant = writingMode ? '' : 'create-idea__section--blue'
  return (
    <section className={`create-idea__section ${blueVariant}`}>
      {writingMode
        ? <CreateForm onSubmit={handleSubmit}
          handleClose={disableEditorWriting} />
        : <button className='create-idea__add'
          onClick={enableEditorWriting}>+</button>}
    </section>
  )
}

const mapStateToProps = ({ editor: { writingMode } }) => {
  return { writingMode }
}

export default connect(mapStateToProps, {
  fetchCreateIdea,
  enableEditorWriting,
  disableEditorWriting
})(CreateIdea)
