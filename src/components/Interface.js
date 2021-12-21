
import React, { useState } from "react";
import {Helmet} from "react-helmet";
import '../styles/controls.css';
import Logo from '../images/WPD001-Logo_WPD001-Logo-Light.svg'
import AllPads from './AllPads';
import Button from './Button';

function Interface() {
  
  const [mode, setMode] = useState("drumSounds");
 
  function loadDrumSounds() {
    setMode("drumSounds");
    document.getElementById("drum-button").className = "load-red";
    document.getElementById("cat-button").className = "load-gray";
  }

  function loadCatSounds() {
    setMode("catSounds");
    document.getElementById("cat-button").className = "load-red";
    document.getElementById("drum-button").className = "load-gray";
  }

  return (
    <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" /> 
    </Helmet>
    <section id="interface" className="interface">
    <div id="controls" className="controls">
        <div>
          <div className="logo"><img src={Logo} /></div>
          <div id="instructions" className="instructions">
              <h3>Instructions</h3>
              <p>Use your keyboard, mouse, or fingers to trigger the pads. The key controls are shown on each pad. Make sure your audio isn't muted!</p>
          </div>
          <hr />

          <Button id="drum-button" className="load-red" text="Play Drum Sounds" onClick={loadDrumSounds} />
          <Button id="cat-button" className="load-gray" text="Play Cat Sounds" onClick={loadCatSounds} />

        </div>
        <div id="message" className="message">
            <p>Let's make noise!</p>
        </div>
    </div>
    <AllPads mode={mode} />
    </section>
    </>
  );
}

export default Interface