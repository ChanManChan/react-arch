import React from 'react'

import * as SC from './styles/form'

export default function Form({ children, ...restProps }) {
  return <SC.Container { ...restProps }>{children}</SC.Container>
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <SC.Base { ...restProps }>{children}</SC.Base>
}

Form.Error = function FormError({ children, ...restProps }) {
  return <SC.Error { ...restProps }>{children}</SC.Error>
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <SC.Title { ...restProps }>{children}</SC.Title>
}

Form.Text = function FormText({ children, ...restProps }) {
  return <SC.Text { ...restProps }>{children}</SC.Text>
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <SC.TextSmall { ...restProps }>{children}</SC.TextSmall>
}

Form.Link = function FormLink({ children, ...restProps }) {
  return <SC.Link { ...restProps }>{children}</SC.Link>
}

Form.Input = function FormInput({ children, ...restProps }) {
  return <SC.Input { ...restProps }>{children}</SC.Input>
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <SC.Submit {...restProps }>{children}</SC.Submit>
}
