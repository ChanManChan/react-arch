import React from 'react'

import * as SC from './styles/feature'

export default function Feature({ children, ...restProps }) {
  return <SC.Container { ...restProps }>{children}</SC.Container>
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <SC.Title { ...restProps }>{children}</SC.Title>
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SC.SubTitle { ...restProps }>{children}</SC.SubTitle>
}
