import React from 'react'

import * as SC from './styles/loading'

export default function Loading({ src, ...restProps }) {
  return (
    <SC.Spinner { ...restProps }>
      <SC.LockBody />
      <SC.Picture src={`/images/users/${src}.png`} />
    </SC.Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <SC.ReleaseBody />
}
