import React from 'react'

import { FeatureContext } from '../../context/feature'
import * as SC from './styles/card'

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = React.useState(false)
  const [itemFeature, setItemFeature] = React.useState({})

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <SC.Container { ...restProps }>{children}</SC.Container>
    </FeatureContext.Provider>
  )
}

Card.Feature = function CardFeature({ category, children, ...restProps }) {
  const { showFeature, itemFeature, setShowFeature } = React.useContext(FeatureContext)
  return showFeature && (
    <SC.Feature { ...restProps } src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <SC.Content>
        <SC.FeatureTitle>{itemFeature.title}</SC.FeatureTitle>
        <SC.FeatureText>{itemFeature.description}</SC.FeatureText>
        <SC.FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </SC.FeatureClose>
        <SC.Group margin="30px 0" flexDirection="row" alignItems="center">
          <SC.Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </SC.Maturity>
          <SC.FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </SC.FeatureText>
        </SC.Group>
        {children}
      </SC.Content>
    </SC.Feature>
  )
}

Card.Group = function CardGroup({ children, ...restProps}) {
  return <SC.Group { ...restProps }>{children}</SC.Group>
}

Card.Title = function CardTitle({ children, ...restProps}) {
  return <SC.Title { ...restProps }>{children}</SC.Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps}) {
  return <SC.SubTitle { ...restProps }>{children}</SC.SubTitle>
}

Card.Text = function CardText({ children, ...restProps}) {
  return <SC.Text { ...restProps }>{children}</SC.Text>
}

Card.Meta = function CardMeta({ children, ...restProps}) {
  return <SC.Meta { ...restProps }>{children}</SC.Meta>
}

Card.Item = function CardItem({ item, children, ...restProps}) {
  const { setShowFeature, setItemFeature } = React.useContext(FeatureContext)

  return (
    <SC.Item
      { ...restProps }
      onClick={() => {
        setItemFeature(item)
        setShowFeature(true)
      }}>
        {children}
    </SC.Item>
  )
}

Card.Image = function CardImage({ ...restProps}) {
  return <SC.Image { ...restProps } />
}

Card.Entities = function CardEntities({ children, ...restProps}) {
  return <SC.Entities { ...restProps }>{children}</SC.Entities>
}
