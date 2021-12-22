import React, { useState } from "react";
import '../styles/pads.css';
import Pad from './Pad';
import '../styles/controls.css';

function AllPads(props) {

  let [count, setCount] = useState(1);

  function checkCount() {
    setCount(count + 1);
    if (count >= 4) {
      setCount(1);
    }
    console.log(count);
  }

  return (
    <section id="padContainer" className="pads" mode={props.mode} >

      {/* -----Row 1-----*/}

      <div className="pad-row">
        <Pad 
          id="pad1" 
          keyAssignment="Key 1"
          mode={props.mode}
          sound="0"
          onClick={checkCount}
          />
        <Pad 
          id="pad2" 
          keyAssignment="Key 2"
          mode={props.mode}
          sound="1"
          onClick={checkCount}
          />
        <Pad 
          id="pad3" 
          keyAssignment="Key 3"
          mode={props.mode}
          sound="2"
          onClick={checkCount}
          />
        <Pad 
          id="pad4" 
          keyAssignment="Key 4"
          mode={props.mode}
          sound="3"
          onClick={checkCount}
          />
      </div>

      {/* -----Row 2-----*/}

      <div className="pad-row">
        <Pad 
          id="padq" 
          keyAssignment="Key Q"
          mode={props.mode}
          sound="4"
          onClick={checkCount}
          />
        <Pad 
          id="padw" 
          keyAssignment="Key W"
          mode={props.mode}
          sound="5"
          onClick={checkCount}
          />
        <Pad 
          id="pade" 
          keyAssignment="Key E"
          mode={props.mode}
          sound="6"
          onClick={checkCount}
          />
        <Pad 
          id="padr" 
          keyAssignment="Key R"
          mode={props.mode}
          sound="7"
          onClick={checkCount}
          />
      </div>

      {/* -----Row 3-----*/}

      <div className="pad-row">
        <Pad 
          id="pada" 
          keyAssignment="Key A"
          mode={props.mode}
          sound="8"
          onClick={checkCount}
          />
        <Pad 
          id="pads" 
          keyAssignment="Key S"
          mode={props.mode}
          sound="9"
          onClick={checkCount}
          />
        <Pad 
          id="padd" 
          keyAssignment="Key D"
          mode={props.mode}
          sound="10"
          onClick={checkCount}
          />
        <Pad 
          id="padf" 
          keyAssignment="Key F"
          mode={props.mode}
          sound="11"
          onClick={checkCount}
          />
      </div>

      {/* -----Row 4-----*/}

      <div className="pad-row">
        <Pad 
          id="padz" 
          keyAssignment="Key Z"
          mode={props.mode}
          sound="12"
          onClick={checkCount}
          />
        <Pad 
          id="padx" 
          keyAssignment="Key X"
          mode={props.mode}
          sound="13"
          onClick={checkCount}
          />
        <Pad 
          id="padc" 
          keyAssignment="Key C"
          mode={props.mode}
          sound="14"
          onClick={checkCount}
          />
        <Pad 
          id="padv" 
          keyAssignment="Key V"
          mode={props.mode}
          sound="15"
          onClick={checkCount}
          />
      </div>
    </section>
  );
}

export default AllPads;
