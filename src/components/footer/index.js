import React from 'react'
import * as SC from './styles/footer'

export default function Footer({ children, ...restProps }) {
  return <SC.Container { ...restProps }>{children}</SC.Container>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <SC.Row { ...restProps }>{children}</SC.Row>
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <SC.Column { ...restProps }>{children}</SC.Column>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <SC.Link { ...restProps }>{children}</SC.Link>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <SC.Title { ...restProps }>{children}</SC.Title>
}

Footer.Text = function FooterText({ children, ...restProps }) {
  return <SC.Text { ...restProps }>{children}</SC.Text>
}

Footer.Break = function FooterBreak({ children, ...restProps }) {
  return <SC.Break { ...restProps }>{children}</SC.Break>
}
