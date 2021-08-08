import React, {
  useRef,
  useState,
  useEffect,
} from 'react'

import { useSpring, animated } from 'react-spring'

import { useHistory } from 'react-router-dom'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'
import RadioMenu from '../components/RadioMenu'

import './RadioPage.css'

  let timeStamp = 0 

  const handleTimeStamp = (e) => {
    timeStamp = e.currentTarget.currentTime
  }

function RadioPage({ data, index }) {

  const { name, logo, avatar, audio } = data
  const [ currURL, setCurrURL ] = useState('')
  const [ visible, setVisible ] = useState(false)
  const [ fade, setFade ] = useState(false)

  const history = useHistory()
  const player = useRef()

  useEffect(() => {
    setCurrURL(history.location.pathname)
    // console.log(currURL)
  }, [])
  
  useEffect(() => {
    player.current.audio.current.currentTime = timeStamp    
  }, [currURL])

  useEffect(() => {
      setFade(!fade)
      return () => setFade(!fade)
    }, [avatar])

  
  const onRenderTranslateX = useSpring({
    // loop: { reverse: true },
    from: { x: 0 },
    to: { x: 200 },
  })

    
  return (
    <div className='outer-container' key={index}>
      
      <div className={ fade ? 'inner-container' : 'inner-container-hidden' }>
        <animated.img
          style={{...onRenderTranslateX}}
          className='avatar-img'
          src={avatar}
          alt={name}
        />

        <AudioPlayer
          ref={player}
          className='audio-mp3'
          src={audio}
          // autoPlay={true}
          onListen={ e => handleTimeStamp(e) }
          controls
          onCanPlay
        />
      </div>
              
      <div
        className='logo-menu-container'
        onMouseLeave={() => setVisible(false)}
      >
        <img
          className='logo-img'
          src={logo}
          alt={name}
          onMouseEnter={() => setVisible(true)}
        />
        <RadioMenu visible={visible} />
      </div>

    </div>
  )
}

export default RadioPage
