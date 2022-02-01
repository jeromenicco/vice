import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

import amoFrame from '../assets/vice-frame-weapon.png'

import starICON from '../assets/icons/vice-star.png'
import starActiveICON from '../assets/icons/vice-star-active.png'

import Slider from '@material-ui/core/Slider'

import './InfoBox.css'

function InfoBox({ data, playerRef, count, isMobileDevice }) {
  const [volValue, setVolValue] = useState(0.5)
  const [timeHour, setTimeHour] = useState([])
  const [timeMin, setTimeMin] = useState([])

  useEffect(() => {
    const setDate = () => {
      const now = new Date()
      const min = now.getMinutes()
      const hour = now.getHours()

      setTimeHour(hour < 10 ? [`0${hour}`] : [`${hour}`])
      setTimeMin(min < 10 ? [`0${min}`] : [`${min}`])
    };
    setDate()

    const interval = setInterval(setDate, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleChange = (e, newValue) => {
    // console.log(e);
    if (e.cancelable) e.preventDefault()

    playerRef.current.audio.current.volume = newValue
    setVolValue(newValue)
  };

  const steps = 1 / 12

  const fadeAmo = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 600 },
  })

  return (
    <div className='info-container-global'>
      <ul className='info-container'>
        <li className='time-now'>
          {timeHour} : {timeMin}
        </li>
        <li className='dollars'>${count.toFixed(0)}</li>
        <li className='heart-container'>
          <p className='heart'>♥&#xFE0E;</p>
          <p className='heart-num'>00{data.id}</p>
        </li>

        {!isMobileDevice && (
          <li className='stars-container'>
            <div className='stars-wrap'>
              <div
                className='stars-empty'
                style={{ backgroundImage: `url(${starICON})` }}
              />
              <div
                className='stars-full'
                style={{
                  width: `${volValue * 100}%`,
                  backgroundImage: `url(${starActiveICON})`,
                }}
              />
            </div>
          </li>
        )}

        {!isMobileDevice && (
          <li className='volume-wrap'>
            <div className='slider-container'>
              <Slider
                style={{ width: 240 }}
                value={volValue}
                onChange={handleChange}
                min={0}
                max={1}
                step={steps}
              />
            </div>
          </li>
        )}
      </ul>

      <div className='weapon-select-wrap'>
        <img className='frame' src={amoFrame} alt='amo-frame' />
        <animated.img
          style={{ ...fadeAmo }}
          className='weapon'
          src={data.weapon}
          alt='weapon'
        />
      </div>
    </div>
  )
}

export default InfoBox
