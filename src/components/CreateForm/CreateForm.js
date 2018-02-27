import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './CreateForm.css'

const ContactForm = props => {
  const { handleSubmit, reset, handleClose } = props
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
      <button type='submit'>Add</button>
      <button onClick={handleClose}>Close</button>
    </form>
  )
}

export default reduxForm({
  form: 'contact'
})(ContactForm)
