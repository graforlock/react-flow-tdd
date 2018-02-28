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
      <div>
        <Field className='create-form__title' placeholder='My title..'
          name='title' component='input' type='text' />
      </div>
      <div>
        <Field className='create-form__body' placeholder='My content..'
          name='body' component='textarea' rows='10' type='text' />
      </div>
      <button className='create-form__add' type='submit'>Add</button>
      <button className='create-form__close' onClick={disableEditorWriting}>Close</button>
    </form>
  )
}

ContactForm = connect(null, {
  disableEditorWriting
})(ContactForm)

export default reduxForm({
  form: 'contact'
})(ContactForm)
