import React, { useState, useEffect } from "react";
import { sounds } from "../sounds"

function Pad(props) {
    
    const [padName, setPadName] = useState();
    let padSound;

    useEffect(() => {
        if (props.mode === "drumSounds") {
            setPadName(sounds.drumSounds[props.sound].title);
            padSound = sounds.drumSounds[props.sound].sound;
        } else if (props.mode === "catSounds") {
            setPadName(sounds.catSounds[props.sound].title);
            padSound = sounds.catSounds[props.sound].sound;
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
        let keyResult = e.key.toLowerCase();
        let pad = document.getElementById("pad" + keyResult);
        let newKey;
        switch (keyResult) {
            case "q":
                newKey = "4";
            break;
            case "w":
                newKey = "5";
            break;
            case "e":
                newKey = "6";
            break;
            case "r":
                newKey = "7";
            break;
            case "a":
                newKey = "8";
            break;
            case "s":
                newKey = "9";
            break;
            case "d":
                newKey = "10";
            break;
            case "f":
                newKey = "11";
            break;
            case "z":
                newKey = "12";
            break;
            case "x":
                newKey = "13";
            break;
            case "c":
                newKey = "14";
            break;
            case "v":
                newKey = "15";
            break;
            default:
                newKey = keyResult - 1;
        }
        padSound = makeSound(props.mode, newKey);       
        pad.style.backgroundColor = "red";
        padSound.play();
    }

    document.onkeyup = function(e) {
        let keyResult = e.key.toLowerCase();
        let pad = document.getElementById("pad" + keyResult);
        pad.style.backgroundColor = "#212121";
        padSound.pause();
        padSound.currentTime = 0;
    }

    return (
        <div id={props.id} className="pad" onMouseDown={handleClick} onMouseUp={resetPad} sound={props.sound} mode={props.mode} onClick={props.onClick}>
            <div className="pad-content noselect">
                <div className="sound-title">{padName}</div>
                <div className="pad-assignment">{props.keyAssignment}</div>
            </div>
        </div>
    )
}

export default Pad