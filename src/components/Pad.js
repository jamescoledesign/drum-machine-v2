import React from "react";
import { sounds } from "../sounds"

function Pad(props) {

    let padSound;

    function makeSound(mode, value) {
        if (mode === "drum") {
            padSound = sounds.drumSounds[value];
        } else if (mode === "cat") {
            padSound = sounds.catSounds[value];
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

    return (
        <div id={props.id} className="pad" onMouseDown={handleClick} onMouseUp={resetPad} sound={props.sound} mode={props.mode}>
            <div className="pad-content noselect">
                <div className="sound-title">{props.title}</div>
                <div className="pad-assignment">{props.keyAssignment}</div>
            </div>
        </div>
    )
}

export default Pad