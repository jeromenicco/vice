import React, {
  useRef,
  useState,
  useEffect,
} from 'react'

import { useSpring, animated } from 'react-spring'

import { useHistory } from 'react-router-dom'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import RadioMenu from '../components/RadioMenu'
import InfoBox from '../components/InfoBox'

import './RadioPage.css'

  let timeStamp = 0 

  const handleTimeStamp = (e) => {
    timeStamp = e.currentTarget.currentTime
  }


function RadioPage({ data, index }) {
  const { name, logo, avatar, audio, background, weapon } = data

  setTimeout(() => { document.body.style.backgroundColor = background }, 200);


  const [ currURL, setCurrURL ] = useState('')
  const [ visible, setVisible ] = useState(false)

  const history = useHistory()
  const player = useRef()

  useEffect(() => {
    setCurrURL(history.location.pathname)
  }, [])
  
  useEffect(() => {
    player.current.audio.current.currentTime = timeStamp    
  }, [currURL])
  
  const onRenderTranslateX = useSpring({
    from: { x: -1000 },
    to: { x: 200 },
  })

  const onRenderTranslateY = useSpring({
    from: { y: 250 },
    to: { y: 0 },
  })

  const chevronFade = useSpring({
      loop: true,
      to: [
        { opacity: 0.5 },
        { opacity: 0 },
      ],
      from: { opacity: 0 },
  })

      
  return (
    <div className='outer-container' key={index}>
      <InfoBox data={data} />
      
      <div className='inner-container'>
        <animated.img
          style={{...onRenderTranslateX}}
          className='avatar-img'
          src={avatar}
          alt={name}
        />
      </div>
              
      <div
        className='logo-menu-container'
        onMouseLeave={() => setVisible(false)}
        >

        <animated.img
          style={{...onRenderTranslateY}}
          className='logo-img'
          src={logo}
          alt={name}
          onMouseEnter={() => setVisible(true)}
          />
          {/* {
            !visible &&
            <animated.div style={{...chevronFade}}>
              <p className='chevron' >⟨</p>
            </animated.div>
          } */}
        <RadioMenu visible={visible} />
      </div>



        <AudioPlayer
          ref={player}
          className='audio-mp3'
          src={audio}
          autoPlay={true}
          onListen={ e => handleTimeStamp(e) }
          controls
          onCanPlay
        />
    </div>
  )
}

export default RadioPage
