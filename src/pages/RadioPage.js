import React, { useRef, useState, useEffect } from 'react'

import { useSpring, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentTime } from '../redux/slices/timeStampSlice'

import { useHistory } from 'react-router-dom'
import AudioPlayer from 'react-h5-audio-player'
import RadioMenu from '../components/RadioMenu'
import InfoBox from '../components/InfoBox'
import viceLogo from '../assets/vice_main_logo.png'

import 'react-h5-audio-player/lib/styles.css'
import './RadioPage.css'


function RadioPage({ data, index, isMobileDevice }) {
  const stamp = useSelector((state) => state.timeStamp.currentTime)
  const { name, logo, avatar, audio, background, duration } = data
  const [count, setCount] = useState(stamp)
  const [currURL, setCurrURL] = useState('')
  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch()

  const handleTimeStamp = (e) => {
    dispatch(setCurrentTime(e.currentTarget.currentTime))
  }

  setTimeout(() => {
    document.body.style.backgroundColor = background
  }, 200)

  const history = useHistory()
  const playerRef = useRef()
  

  useEffect(() => {
    setCurrURL(history.location.pathname)
    return () => setCurrURL(history.location.pathname)
  }, [history.location.pathname])

  useEffect(() => {
    playerRef.current.audio.current.currentTime = stamp
  }, [])

  useEffect(() => {
    if (count < duration) {
      setTimeout(() => setCount(count + 1), 1000)
    }
  })

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: {opacity: 1},
    delay: 1000,
    config: { duration: 800}
  })

  const fadeInAvatar = useSpring({
    from: { opacity: 0 },
    to: {opacity: 0.3 },
    delay: 1000,
    config: { duration: 800}
  })

  return (
    <div className='outer-container' key={index}>
      <InfoBox
        data={data}
        playerRef={playerRef}
        count={count}
        isMobileDevice={isMobileDevice}
      />
      {
        !isMobileDevice &&
        <img className='vice-logo' src={`${viceLogo}`} alt='main-logo' />
      }

        <div className='inner-container' >
          <animated.img
            className='avatar-img'
            style={!isMobileDevice ? { ...fadeIn} : {...fadeInAvatar}}
            src={avatar}
            alt={name}
          />
        </div>

      <div
        className='logo-menu-container'
        onMouseLeave={() => setVisible(false)}
      >
        <animated.img
          style={{...fadeIn}}
          className='logo-img'
          src={logo}
          alt={name}
          onMouseEnter={() => !isMobileDevice && setVisible(true)}
        />

        {/* <div className="dummy-spacer-mobile" /> */}

        <RadioMenu
          visible={visible}
          isMobileDevice={isMobileDevice}
          currURL={currURL}
        />
      </div>

      <AudioPlayer
        ref={playerRef}
        className='audio-mp3'
        src={audio}
        autoPlay={true}
        onListen={(e) => handleTimeStamp(e)}
        loop={true}
        type='audio/mpeg'
      />
    </div>
  )
}

export default RadioPage