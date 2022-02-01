import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

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
            <button onClick={handleLanding}>ENTER</button>
        </div>
    )
}

export default Landing;
