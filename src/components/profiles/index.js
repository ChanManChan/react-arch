import React from 'react'

import * as SC from './styles/profiles'

export default function Profiles({ children, ...restProps }) {
  return <SC.Container { ...restProps }>{children}</SC.Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <SC.Title { ...restProps }>{children}</SC.Title>
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <SC.List { ...restProps }>{children}</SC.List>
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <SC.Item { ...restProps }>{children}</SC.Item>
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return <SC.Picture { ...restProps } src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <SC.Name { ...restProps }>{children}</SC.Name>
}
