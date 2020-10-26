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
  const videoPlayer = React.createRef()
  const playButton = React.createRef()
  const stopButton = React.createRef()
  const progressBar = React.createRef()
  const timestamp = React.createRef()

  // Update progress & timestamp
  const updateProgress = () => {
    if(showPlayer) {
      progressBar.current.value = (videoPlayer.current.currentTime / videoPlayer.current.duration) * 100;

      // Get minutes
      let mins = Math.floor(videoPlayer.current.currentTime / 60);
      if (mins < 10) {
        mins = '0' + String(mins);
      }

      // Get seconds
      let secs = Math.floor(videoPlayer.current.currentTime % 60);
      if (secs < 10) {
        secs = '0' + String(secs);
      }

      timestamp.current.innerHTML = `${mins}:${secs}`;
    }
  }

  // update play/pause icon
  const updatePlayIcon = () => {
    if(showPlayer) {
      if (videoPlayer.current.paused) {
        playButton.current.innerHTML = '<i class="fa fa-play fa-2x" style="color: white;" />'
      } else {
        playButton.current.innerHTML = '<i class="fa fa-pause fa-2x" style="color: white;" />'
      }
    }
  }


  // Stop video
  const stopVideo = () => {
    if(showPlayer) {
      videoPlayer.current.currentTime = 0;
      videoPlayer.current.pause();
    }
  }

  // Play & pause video
  const toggleVideoStatus = () => {
    if(showPlayer) {
      if (videoPlayer.current.paused) {
        videoPlayer.current.play();
      } else {
        videoPlayer.current.pause();
      }
    }
  }

  // Set video time to progress
  const setVideoProgress = () => {
    if(showPlayer) {
      videoPlayer.current.currentTime = (+progressBar.current.value * videoPlayer.current.duration) / 100;
    }
  }

  return showPlayer && ReactDOM.createPortal(
    <SC.Overlay { ...restProps }>
      <SC.Inner>
        <SC.Video
         ref={videoPlayer}
         id="netflix-player"
         src={src}
         className='screen'
         poster='/images/misc/poster.png'
         onClick={toggleVideoStatus}
         onPause={updatePlayIcon}
         onPlay={updatePlayIcon}
         onTimeUpdate={updateProgress} />
        <SC.Controls className="controls">
          <SC.VideoButton ref={playButton} className="btn" id='play' onClick={toggleVideoStatus}>
            <SC.Icon className="fa fa-play fa-2x"></SC.Icon>
          </SC.VideoButton>
          <SC.VideoButton ref={stopButton} className="btn" id='stop' onClick={stopVideo}>
            <SC.Icon className="fa fa-stop fa-2x"></SC.Icon>
          </SC.VideoButton>
          <SC.Progress ref={progressBar} type="range" id='progress' className='progress' min='0' max='100' step='0.1' value='0' onChange={setVideoProgress}/>
          <SC.Timestamp ref={timestamp} className="timestamp" id="timestamp">00:00</SC.Timestamp>
        </SC.Controls>
        <SC.Close onClick={() => setShowPlayer(false)} />
      </SC.Inner>
    </SC.Overlay>,
    document.body
  )
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = React.useContext(PlayerContext)
  return <SC.Button { ...restProps } onClick={() => setShowPlayer(cs => !cs)}>Play</SC.Button>
}
