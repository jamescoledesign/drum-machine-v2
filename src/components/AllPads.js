
import React, { useState } from 'react';
import '../styles/pads.css';
import Logo from '../images/WPD001-Logo_WPD001-Logo-Light.svg'
import Pad from './Pad';

function AllPads() {

  const [mode, setMode] = useState("drum");

  return (
    <section id="pads" className="pads">

      {/* -----Row 1-----*/}

      <div className="pad-row">
        <Pad 
          id="pad1" 
          title="Title" 
          keyAssignment="Key 1"
          mode={mode}
          sound="0"
          />
        <Pad 
          id="pad2" 
          title="Title" 
          keyAssignment="Key 2"
          mode={mode}
          sound="1"
          />
        <Pad 
          id="pad3" 
          title="Title" 
          keyAssignment="Key 1"
          mode={mode}
          sound="2"
          />
        <Pad 
          id="pad4" 
          title="Title" 
          keyAssignment="Key 2"
          mode={mode}
          sound="3"
          />
      </div>

      {/* -----Row 2-----*/}

      <div className="pad-row">
        <Pad 
          id="pad5" 
          title="Title" 
          keyAssignment="Key 1"
          mode={mode}
          sound="4"
          />
        <Pad 
          id="pad6" 
          title="Title" 
          keyAssignment="Key 2"
          mode={mode}
          sound="5"
          />
        <Pad 
          id="pad7" 
          title="Title" 
          keyAssignment="Key 1"
          mode={mode}
          sound="6"
          />
        <Pad 
          id="pad8" 
          title="Title" 
          keyAssignment="Key 2"
          mode={mode}
          sound="7"
          />
      </div>

      {/* -----Row 3-----*/}

      <div className="pad-row">
        <Pad 
          id="pad9" 
          title="Title" 
          keyAssignment="Key 1"
          mode={mode}
          sound="8"
          />
        <Pad 
          id="pad10" 
          title="Title" 
          keyAssignment="Key 2"
          mode={mode}
          sound="9"
          />
        <Pad 
          id="pad11" 
          title="Title" 
          keyAssignment="Key 1"
          mode={mode}
          sound="10"
          />
        <Pad 
          id="pad12" 
          title="Title" 
          keyAssignment="Key 2"
          mode={mode}
          sound="11"
          />
      </div>

      {/* -----Row 4-----*/}

      <div className="pad-row">
        <Pad 
          id="pad13" 
          title="Title" 
          keyAssignment="Key 1"
          mode={mode}
          sound="12"
          />
        <Pad 
          id="pad14" 
          title="Title" 
          keyAssignment="Key 2"
          mode={mode}
          sound="13"
          />
        <Pad 
          id="pad15" 
          title="Title" 
          keyAssignment="Key 1"
          mode={mode}
          sound="14"
          />
        <Pad 
          id="pad16" 
          title="Title" 
          keyAssignment="Key 2"
          mode={mode}
          sound="15"
          />
      </div>
    </section>
  );
}

export default AllPads;
