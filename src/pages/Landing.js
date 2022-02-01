import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import viceLogo from "../assets/vice_main_logo.png";


import './Landing.css'

function Landing() {
    // const [landing, setLanding] = useState(false)

    const handleLanding = () => {
        history.push('/flash')
        // setLanding(true)
    }

    const history = useHistory()
    return (
        <div className='landing-container'>
            <img className="vice-logo" src={`${viceLogo}`} alt="main-logo" />
            <p>Get wasted on music</p>
            <button onClick={handleLanding}>Play</button>
        </div>
    )
}

export default Landing;
