import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export function PublicRoute({ isAuthenticated, authenticatedPath, children: PublicComponent, ...rest }) {
  return <Route { ...rest } render={() => !isAuthenticated ? PublicComponent : <Redirect to={{ pathname: authenticatedPath }} />} />
}

export function PrivateRoute({ isAuthenticated, unauthenticatedPath, children: PrivateComponent, ...rest }) {
  return <Route { ...rest } render={() => isAuthenticated ? PrivateComponent : <Redirect to={{ pathname: unauthenticatedPath }} />} />
}
