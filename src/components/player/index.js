import React from 'react'
import ReactDOM from 'react-dom'

import * as SC from './styles/player'
import { PlayerContext } from '../../context/player'

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = React.useState(false)
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <SC.Container { ...restProps }>{children}</SC.Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = React.useContext(PlayerContext)

  return showPlayer && ReactDOM.createPortal(
    <SC.Overlay onClick={() => setShowPlayer(false)} { ...restProps }>
      <SC.Inner>
        <video id="netflix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
        <SC.Close />
      </SC.Inner>
    </SC.Overlay>,
    document.body
  )
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = React.useContext(PlayerContext)
  return <SC.Button { ...restProps } onClick={() => setShowPlayer(cs => !cs)}>Play</SC.Button>
}
