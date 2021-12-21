import React, { useState, useEffect } from "react";
import { sounds } from "../sounds"

function Pad(props) {
    
    const [padName, setPadName] = useState();
    let padSound;

    useEffect(() => {
        if (props.mode === "drumSounds") {
            setPadName(sounds.drumSounds[props.sound].title);
        } else if (props.mode === "catSounds") {
            setPadName(sounds.catSounds[props.sound].title);
        }
    });

    function makeSound(mode, value) {
        if (mode === "drumSounds") {
            padSound = sounds.drumSounds[value].sound;
        } else if (mode === "catSounds") {
            padSound = sounds.catSounds[value].sound;
        }
        return padSound = new Audio(padSound);
    }

    function handleClick() {
        makeSound(props.mode, props.sound);
        let pad = document.getElementById(props.id);
        pad.style.backgroundColor = "red";
        padSound.play();
    }

    function resetPad() {
        let pad = document.getElementById(props.id);
        pad.style.backgroundColor = "#212121";
        padSound.pause();
        padSound.currentTime = 0;
    }

    document.onkeydown = function(e) {
        let keyResult = "pad" + e.key;
        console.log(keyResult);
        let pad = document.getElementById(keyResult);
        pad.style.backgroundColor = "red";
    }

    document.onkeyup = function(e) {
        let keyResult = "pad" + e.key;
        let pad = document.getElementById(keyResult);
        pad.style.backgroundColor = "#212121";
    }

    return (
        <div id={props.id} className="pad" onMouseDown={handleClick} onMouseUp={resetPad} sound={props.sound} mode={props.mode}>
            <div className="pad-content noselect">
                <div className="sound-title">{padName}</div>
                <div className="pad-assignment">{props.keyAssignment}</div>
            </div>
        </div>
    )
}

export default Pad