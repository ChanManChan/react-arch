import React from 'react'
import * as SC from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <SC.Item { ... restProps }>
      <SC.Inner direction={direction}>
        {children}
      </SC.Inner>
    </SC.Item>
  )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <SC.Container { ...restProps }>{children}</SC.Container>
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <SC.Pane { ...restProps }>{children}</SC.Pane>
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <SC.Title { ...restProps }>{children}</SC.Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SC.SubTitle { ...restProps }>{children}</SC.SubTitle>
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <SC.Image { ...restProps } />
}
