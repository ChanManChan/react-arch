import React from 'react'
import { useHistory } from 'react-router-dom'

import { FirebaseContext } from '../context/firebase'
import { HeaderContainer, FooterContainer } from '../containers'
import { Form  } from '../components'
import * as ROUTES from '../constants/routes'

export default function SignIn() {
  const history = useHistory()
  const { firebaseInit } = React.useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const isInvalid = password === '' || emailAddress === ''

  const handleSignIn = e => {
    e.preventDefault()

    // firebase authentication
    firebaseInit.auth().signInWithEmailAndPassword(emailAddress, password)
    .then(() => {
      // push to the browse page
      history.push(ROUTES.BROWSE)
    })
    .catch(err => {
      setEmailAddress('')
      setPassword('')
      setError(err.message)
    })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input placeholder='Email Address' type='email' value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
            <Form.Input autoComplete='off' placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <Form.Submit disabled={isInvalid} type='submit'>Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link></Form.Text>
          <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
