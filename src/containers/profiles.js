import React from 'react'

import { Header, Profiles } from '../components'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

export function SelectProfileContainer({ user = {}, setProfile }) {

  const placeholderProfiles = [
    {
      displayName: 'Chan Chan Man',
      photoURL: Math.floor(Math.random() * 5) + 1
    },
     {
      displayName: 'Children',
      photoURL: Math.floor(Math.random() * 5) + 1
    }
  ]

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
          <Profiles.User onClick={() => setProfile({ displayName: placeholderProfiles[0].displayName, photoURL: placeholderProfiles[0].photoURL })}>
            <Profiles.Picture src={placeholderProfiles[0].photoURL} />
            <Profiles.Name>{placeholderProfiles[0].displayName}</Profiles.Name>
          </Profiles.User>
          <Profiles.User onClick={() => setProfile({ displayName: placeholderProfiles[1].displayName, photoURL: placeholderProfiles[1].photoURL })}>
            <Profiles.Picture src={placeholderProfiles[1].photoURL} />
            <Profiles.Name>{placeholderProfiles[1].displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}
