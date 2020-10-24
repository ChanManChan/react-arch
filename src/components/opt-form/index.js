import React from 'react'
import * as SC from './styles/opt-form'

export default function OptForm({ children, ...restProps }) {
  return <SC.Container { ...restProps }>{children}</SC.Container>
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <SC.Input { ...restProps } />
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <SC.Button {...restProps }>
      {children} <img src='/images/icons/chevron-right.png' alt='Try Now' />
    </SC.Button>
  )
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <SC.Text { ...restProps }>{children}</SC.Text>
}

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <SC.Break { ...restProps } />
}
