import React, { createContext } from 'react'
import * as SC from './styles/accordion'

const ToggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
  return (
    <SC.Container { ...restProps }>
      <SC.Inner>{children}</SC.Inner>
    </SC.Container>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <SC.Title { ...restProps }>{children}</SC.Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <SC.Frame { ...restProps }>{children}</SC.Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = React.useState(false)

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <SC.Item { ...restProps }>{children}</SC.Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = React.useContext(ToggleContext)

  return (
    <SC.Header onClick={() => setToggleShow(toggleShow => !toggleShow)} { ...restProps }>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="close"/>
      ) : (
        <img src="/images/icons/add.png" alt="open"/>
      )}
    </SC.Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = React.useContext(ToggleContext)

  return toggleShow && <SC.Body { ...restProps }>{children}</SC.Body>
}
