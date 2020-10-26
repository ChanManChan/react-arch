import styled from 'styled-components/macro'

export const Container = styled.div``

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`

export const Inner = styled.div`
  position: relative;
  width:100%;
  max-width: 900px;
  margin: auto;
  video {
    height: 100%;
    width: 100%;
  }
`

export const Close = styled.button`
  position: absolute;
  right: 20px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.3;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: '';
    height: 22px;
    width: 2px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg)
  }
`

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a10;
  width: 114px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`

export const Video = styled.video`
  cursor: pointer;
  width: 60%;
  background-color: #000 !important;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const Controls = styled.div`
  background: #333;
  color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const VideoButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`

export const Icon = styled.i`
  color: #fff;
`

export const Progress = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
  &::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    margin-top: -14px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  &:focus::-webkit-slider-runnable-track {
  	background: #367ebd;
  }
  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  &::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &:focus::-ms-fill-lower {
  	background: #3071a9;
  }
  &::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &:focus::-ms-fill-upper {
  	background: #367ebd;
  }
`

export const Timestamp = styled.span`
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`
