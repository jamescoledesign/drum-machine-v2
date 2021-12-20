
import React from 'react';
import {Helmet} from "react-helmet";
import '../styles/controls.css';
import Logo from '../images/WPD001-Logo_WPD001-Logo-Light.svg'

function Controls() {

  return (
    <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" /> 
    </Helmet>
    <section id="controls" className="controls">
        <div>
          <div className="logo"><img src={Logo} /></div>
          <div id="instructions" className="instructions">
              <h3>Instructions</h3>
              <p>Use your keyboard, mouse, or fingers to trigger the pads. The key controls are shown on each pad. Make sure your audio isn't muted!</p>
          </div>
          <hr />
          <div className="selection">
              <a href=""><button className="load-red"></button></a>
              <h4>Play Drum Sounds</h4>
          </div>

          <div className="selection">
              <a href=""><button className="load-gray"></button></a>
              <h4>Play Cat Sounds</h4>
          </div>
        </div>    
        <div id="message" className="message">
            <p>Let's make noise!</p>
        </div>
    </section>
    </>
  );
}

export default Controls