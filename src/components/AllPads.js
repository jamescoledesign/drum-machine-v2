
import React from 'react';
import '../styles/pads.css';
import Pad from './Pad';

function AllPads(props) {

  return (
    <section id="pads" className="pads">

      {/* -----Row 1-----*/}

      <div className="pad-row">
        <Pad 
          id="pad1" 
          keyAssignment="Key 1"
          mode={props.mode}
          sound="0"
          />
        <Pad 
          id="pad2" 
          keyAssignment="Key 2"
          mode={props.mode}
          sound="1"
          />
        <Pad 
          id="pad3" 
          keyAssignment="Key 3"
          mode={props.mode}
          sound="2"
          />
        <Pad 
          id="pad4" 
          keyAssignment="Key 4"
          mode={props.mode}
          sound="3"
          />
      </div>

      {/* -----Row 2-----*/}

      <div className="pad-row">
        <Pad 
          id="pad5" 
          keyAssignment="Key Q"
          mode={props.mode}
          sound="4"
          />
        <Pad 
          id="pad6" 
          keyAssignment="Key W"
          mode={props.mode}
          sound="5"
          />
        <Pad 
          id="pad7" 
          keyAssignment="Key E"
          mode={props.mode}
          sound="6"
          />
        <Pad 
          id="pad8" 
          keyAssignment="Key R"
          mode={props.mode}
          sound="7"
          />
      </div>

      {/* -----Row 3-----*/}

      <div className="pad-row">
        <Pad 
          id="pad9" 
          keyAssignment="Key A"
          mode={props.mode}
          sound="8"
          />
        <Pad 
          id="pad10" 
          keyAssignment="Key S"
          mode={props.mode}
          sound="9"
          />
        <Pad 
          id="pad11" 
          keyAssignment="Key D"
          mode={props.mode}
          sound="10"
          />
        <Pad 
          id="pad12" 
          keyAssignment="Key F"
          mode={props.mode}
          sound="11"
          />
      </div>

      {/* -----Row 4-----*/}

      <div className="pad-row">
        <Pad 
          id="pad13" 
          keyAssignment="Key Z"
          mode={props.mode}
          sound="12"
          />
        <Pad 
          id="pad14" 
          keyAssignment="Key X"
          mode={props.mode}
          sound="13"
          />
        <Pad 
          id="pad15" 
          keyAssignment="Key C"
          mode={props.mode}
          sound="14"
          />
        <Pad 
          id="pad16" 
          keyAssignment="Key V"
          mode={props.mode}
          sound="15"
          />
      </div>
    </section>
  );
}

export default AllPads;
