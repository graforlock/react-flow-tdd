// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import type { FormProps } from 'redux-form'

import './CreateForm.css'

import { disableEditorWriting } from '../../actions'

type Props = {
  disableEditorWriting: Function
} & FormProps

let ContactForm = (props: Props) => {
  const { handleSubmit, reset, disableEditorWriting } = props
  const handleSubmitAndClear = e => {
    handleSubmit(e)
    reset()
  }
  return (
    <form onSubmit={handleSubmitAndClear}>
      <fieldset>
        <Field className='create-form__title' placeholder='My title..'
          name='title' component='input' type='text' />
      </fieldset>
      <fieldset>
        <Field className='create-form__body' placeholder='My content..'
          name='body' component='textarea' rows='10' type='text' />
      </fieldset>
      <button type='submit'>Add</button>
      <button onClick={disableEditorWriting}>Close</button>
    </form>
  )
}

ContactForm = connect(null, {
  disableEditorWriting
})(ContactForm)

export default reduxForm({
  form: 'contact'
})(ContactForm)
