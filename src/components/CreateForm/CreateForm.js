import React from 'react'
import { Field, reduxForm } from 'redux-form'

const ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='title' component='input' type='text' />
      </div>
      <div>
        <Field name='body' component='textarea' type='text' />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'contact'
})(ContactForm)
