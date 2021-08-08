import React, { useEffect, useState } from 'react'

import starICON from '../assets/icons/vice-star.png'
import starActiveICON from '../assets/icons/vice-star-active.png'

import revolver from '../assets/icons/vice-revolver.png'



import './InfoBox.css'

console.log(new Date())
// console.log(now.getSeconds())
// const secondDegrees = ((second / 60) * 360) + 90

function InfoBox() {

  const [ timeHour, setTimeHour ] = useState([])
  const [ timeMin, setTimeMin ] = useState([])
  const [ timeSec, setTimeSec ] = useState([])
  

  useEffect(() => {
    const setDate = () => {
      const now = new Date()

      const second = now.getSeconds()
      
      const min = now.getMinutes()
      
      const hour = now.getHours()

        setTimeHour(
          hour < 10 
          ? [ `0${hour}`]
          : [ `${hour}` ]
        )

        setTimeMin(
          min < 10 
          ? [ `0${min}`]
          : [ `${min}` ]
        )

        setTimeSec(second)
    }
    setDate()
  
    const interval = setInterval(setDate, 1000)
    return () => clearInterval(interval)

  }, [])


  return (
    <div className='info-container-global'>

      <ul className='info-container'>
        <li className='time-now'>{timeHour} : {timeMin}</li>
        <li className='dollars'>$0000{timeSec}</li>
        <li className='heart-container'>
          <p className='heart'>♥</p>
          <p className='heart-num'>150</p>
        </li>
        <li className='stars-container'>
          <img
            className='star-icon'
            src={starICON}
            alt='star'
          />
          <img
            className='star-icon'
            src={starICON}
            alt='star'
          />
          <img
            className='star-icon'
            src={starICON}
            alt='star'
          />
          <img
            className='star-icon'
            src={starActiveICON}
            alt='star'
          />
          <img
            className='star-icon'
            src={starActiveICON}
            alt='star'
          />
          <img
            className='star-icon'
            src={starActiveICON}
            alt='star'
          />
        </li>
      </ul>

      <div className='weapon-select-wrap'>
        <div className='weapon-select-container1' />
        <div className='weapon-select-container2'/>
        <div className='weapon-select-container-background' />
        <div className='weapon-select-container-shadow'/>
        <img
            className='revolver'
            src={revolver}
            alt='revolver'
          />
      </div>
    </div>
  )
}

export default InfoBox
