import React, { useRef, useState, useEffect } from "react";

import {
  // useSpring,
  animated,
} from "react-spring";

import { useHistory } from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import RadioMenu from "../components/RadioMenu";
import InfoBox from "../components/InfoBox";
import viceLogo from "../assets/vice_main_logo.png";

import "./RadioPage.css";

let timeStamp = 0;

const handleTimeStamp = (e) => {
  timeStamp = e.currentTarget.currentTime;
};

function RadioPage({ data, index, isMobileDevice }) {
  const { name, logo, avatar, audio, background, duration } = data;
  const [count, setCount] = useState(timeStamp);
  const [currURL, setCurrURL] = useState("");
  const [visible, setVisible] = useState(false);

  setTimeout(() => {
    document.body.style.backgroundColor = background;
  }, 200);

  const history = useHistory();
  const playerRef = useRef();

  useEffect(() => {
    setCurrURL(history.location.pathname);
  }, [history.location.pathname]);

  useEffect(() => {
    playerRef.current.audio.current.currentTime = timeStamp;
  }, [currURL]);

  useEffect(() => {
    if (count < duration) {
      setTimeout(() => setCount(count + 1), 1000);
    }
  });

  // const slideFromLeft = useSpring({
  //   from: { x: -1000 },
  //   to: { x: 200 },
  // });

  // const slideFromRight = useSpring({
  //   from: { x: 1000 },
  //   to: { x: 0 },
  // });

  // const slideFromBottom = useSpring({
  //   from: { y: 250 },
  //   to: { y: 0 },
  // });

  return (
    <div className="outer-container" key={index}>
      <InfoBox data={data} playerRef={playerRef} count={count} />
      <img className="vice-logo" src={`${viceLogo}`} alt="main-logo" />

      <div className="inner-container">
        <animated.img
          className="avatar-img"
          // style={{ ...slideFromLeft }}
          src={avatar}
          alt={name}
        />
      </div>

      <div
        className="logo-menu-container"
        onMouseLeave={() => setVisible(false)}
      >
        <animated.img
          // style={
          //   isMobileDevice ? { ...slideFromRight } : { ...slideFromBottom }
          // }
          className="logo-img"
          src={logo}
          alt={name}
          onMouseEnter={() => !isMobileDevice && setVisible(true)}
        />
        {/* {
            !visible &&
            <animated.div style={{...chevronFade}}>
              <p className='chevron' >⟨</p>
            </animated.div>
          } */}
        <RadioMenu
          visible={visible}
          isMobileDevice={isMobileDevice}
          currURL={currURL}
        />
      </div>

      <AudioPlayer
        ref={playerRef}
        className="audio-mp3"
        src={audio}
        autoPlay={true}
        loop={true}
        onListen={(e) => handleTimeStamp(e)}
      />
    </div>
  );
}

export default RadioPage;
