import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import * as SC from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <SC.Background { ...restProps }>{children}</SC.Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <SC.Container { ...restProps }>{children}</SC.Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <SC.Group { ...restProps }>{children}</SC.Group>
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

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <SC.Picture { ...restProps } src={`/images/users/${src}.png`} />
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <SC.Feature { ...restProps }>{children}</SC.Feature>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <SC.Text { ...restProps }>{children}</SC.Text>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <SC.Link { ...restProps }>{children}</SC.Link>
}

Header.FeatureCallOut = function HeaderFeatureCallout({ children, ...restProps }) {
  return <SC.FeatureCallOut { ...restProps }>{children}</SC.FeatureCallOut>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <SC.Profile { ...restProps }>{children}</SC.Profile>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <SC.Dropdown { ...restProps }>{children}</SC.Dropdown>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <SC.PlayButton { ...restProps }>{children}</SC.PlayButton>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = React.useState(false)
  return (
    <SC.Search { ...restProps }>
      <SC.SearchIcon onClick={() => setSearchActive(cs => !cs)}>
        <img src='/images/icons/search.png' alt='search' />
      </SC.SearchIcon>
      <SC.SearchInput active={searchActive} placeholder='Search films and series' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
    </SC.Search>
  )
}
