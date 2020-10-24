import React from 'react'
import { useHistory } from 'react-router-dom'

import { FirebaseContext } from '../context/firebase'
import { HeaderContainer, FooterContainer } from '../containers'
import { Form  } from '../components'
import * as ROUTES from '../constants/routes'

export default function SignIn() {
  const history = useHistory()
  const { firebaseInit } = React.useContext(FirebaseContext)
  const [firstName, setFirstName] = React.useState('')
  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const isInvalid = firstName === '' || password === '' || emailAddress === ''

  const handleSignUp = e => {
    e.preventDefault()

    // firebase authentication
    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then(result => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1
        })
        .then(() => history.push(ROUTES.BROWSE))
      })
      .catch(err => {
        setFirstName('')
        setEmailAddress('')
        setPassword('')
        setError(err.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method='POST'>
            <Form.Input placeholder='First Name' type='text' value={firstName} onChange={e => setFirstName(e.target.value)} />
            <Form.Input placeholder='Email Address' type='email' value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
            <Form.Input autoComplete='off' placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <Form.Submit disabled={isInvalid} type='submit'>Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link></Form.Text>
          <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
