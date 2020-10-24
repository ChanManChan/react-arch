import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { Home, Browse, SignIn, SignUp } from './pages'
import * as ROUTES from './constants/routes'
import { PublicRoute, PrivateRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

export default function Boot() {
  let { user } = useAuthListener()

  return (
    <Router>
      <Switch>
        <PublicRoute exact isAuthenticated={user} path={ROUTES.HOME} authenticatedPath={ROUTES.BROWSE}>
          <Home />
        </PublicRoute>
        <PublicRoute exact isAuthenticated={user} path={ROUTES.SIGN_IN} authenticatedPath={ROUTES.BROWSE}>
          <SignIn />
        </PublicRoute>
        <PublicRoute exact isAuthenticated={user} path={ROUTES.SIGN_UP} authenticatedPath={ROUTES.BROWSE}>
          <SignUp />
        </PublicRoute>
        <PrivateRoute exact isAuthenticated={user} path={ROUTES.BROWSE} unauthenticatedPath={ROUTES.SIGN_IN}>
          <Browse />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}
