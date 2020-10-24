import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import * as SC from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <SC.Background { ...restProps }>{children}</SC.Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <SC.Container { ...restProps }>{children}</SC.Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <SC.Logo { ...restProps }/>
    </ReactRouterLink>
  )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <SC.ButtonLink { ...restProps }>{children}</SC.ButtonLink>
}
