import React from "react";
import Crash from "../sounds/drum/Crash.wav"
import { sounds } from "../sounds"

function Pad(props) {

    const customData = require('../sounds');

let audio1 = new Audio(sounds.drumSounds[props.sound]); 

let audioArr = [audio1];

function handleClick() {
    let pad = document.getElementById(props.id);
    pad.style.backgroundColor = "red";
    audioArr[0].play();
    console.log(props.sound);
}

function resetPad() {
    let pad = document.getElementById(props.id);
    pad.style.backgroundColor = "#212121";
    audioArr[0].pause();
    audioArr[0].currentTime = 0;
}

    return (
        <div id={props.id} className="pad" onMouseDown={handleClick} onMouseUp={resetPad} sound={props.sound}>
            <div className="pad-content noselect">
                <div className="sound-title">{props.title}</div>
                <div className="pad-assignment">{props.keyAssignment}</div>
            </div>
        </div>
    )
}

export default Pad