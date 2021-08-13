import React, { useEffect, useState } from 'react'

import starICON from '../assets/icons/vice-star.png'
import starHalfICON from '../assets/icons/vice-star.png'
import starActiveICON from '../assets/icons/vice-star-active.png'

import Slider from '@material-ui/core/Slider'



import './InfoBox.css'


function InfoBox({ data, playerRef }) {

//  console.log(data)

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



  // useEffect(() => {
  //   playerRef.current.audio.current.volume = 0.5
  // }, [])

  const [ volValue, setVolValue ] = useState(0.5)

  const handleChange = (e, newValue) => {
    playerRef.current.audio.current.volume = newValue
    setVolValue(newValue)
  }


  const steps = (1 / 12)

  // const starArray = [
  //   {
  //     state: 'empty',
  //     uri: '../assets/icons/vice-star.png',
  //   },
  //   {
  //     state: 'half',
  //     uri: '../assets/icons/vice-star-active.png',
  //   },
  //   {
  //     state: 'full',
  //     uri: '../assets/icons/vice-star-active.png',
  //   }
  // ]


  return (
    <div className='info-container-global'>

      <ul className='info-container'>
        <li className='time-now'>{timeHour} : {timeMin}</li>
        <li className='dollars'>$0000{timeSec}</li>
        <li className='heart-container'>
          <p className='heart'>♥</p>
          <p className='heart-num'>009</p>
        </li>



        <li className='stars-container'>
          <img
            className='star-icon'
            src={starICON}
            alt='star'
          />
        </li>


        <li>
        <img
            className='star-icon'
            src={starActiveICON}
            alt='star'
          />
        </li>


        
        <li>




          <div className='slider-container'>
            <Slider
              // track="inverted"
              style={{width: 240}}
              value={volValue}
              onChange={handleChange}
              min={0}
              max={1}
              step={steps}
              // marks={true}
              // inverted={true}
            />
            <p>{ ((volValue / 12) * 10).toFixed(2) }</p> 
          </div>

        </li>
      </ul>

      <div className='weapon-select-wrap'>
        <div className='weapon-select-container1' />
        <div className='weapon-select-container2'/>
        <div className='weapon-select-container-background' />
        <div className='weapon-select-container-shadow'/>
        <img
            className='weapon'
            src={data.weapon}
            alt='revolver'
          />
      </div>
    </div>
  )
}

export default InfoBox
