import React from 'react'

import { SelectProfileContainer } from './'
import { FirebaseContext } from '../context/firebase'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const { firebaseInit } = React.useContext(FirebaseContext)

  const user = firebaseInit.auth().currentUser || {}

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [profile.displayName])


  return <SelectProfileContainer user={user} setProfile={setProfile} />
}
