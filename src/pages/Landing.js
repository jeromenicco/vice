import React from 'react'
import { useHistory } from 'react-router-dom'
import viceLogo from '../assets/vice_main_logo.png'
import { useSpring, animated } from 'react-spring'


import './Landing.css'

function Landing() {

    const fadeIn = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        config: { duration: 2000 }
      })

    const handleLanding = () => {
        history.push('/flash')
    }

    const history = useHistory()
    return (
        <div className='landing-container'>
            <animated.div style={{...fadeIn}} className='landing-container'>
                <img className='vice-logo' src={`${viceLogo}`} alt='main-logo' />
                <p>Get wasted on music</p>
                <button onClick={handleLanding}>Play</button>
            </animated.div>
        </div>
    )
}

export default Landing
