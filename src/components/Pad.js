import React, { useState, useEffect } from "react";
import { sounds } from "../sounds"

function Pad(props) {
    
    const [padName, setPadName] = useState();
    let [count, setCount] = useState(1);
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
        checkCount();
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

    function checkCount() {
        let message = document.getElementById("message-text");
        let newCount;
        switch (message.innerHTML) {
            case "Let's make noise!":
                newCount = "1";
                message.innerHTML = newCount;
            break;
            case "1":
                newCount = "2";
                message.innerHTML = newCount;
            break;
            case "2":
                newCount = "3";
                message.innerHTML = newCount;
            break;
            case "3":
                newCount = "4";
                message.innerHTML = newCount;
            break;
            case "4":
                newCount = "1";
                message.innerHTML = newCount;
            break;
            default:
                console.log("Invalid selection");
        }
        console.log(message.innerHTML);
      }

    document.onkeydown = function(e) {
        let keyResult = e.key.toLowerCase();
        let pad = document.getElementById("pad" + keyResult);
        let newKey; 

        switch (keyResult) {
            case "1":
                newKey = "1";
                checkCount();
            break;
            case "2":
                newKey = "2";
                checkCount();
            break;
            case "3":
                newKey = "3";
                checkCount();
            break;
            case "4":
                newKey = "4";
                checkCount();
            break;
            case "q":
                newKey = "4";
                checkCount();
            break;
            case "w":
                newKey = "5";
                checkCount();
            break;
            case "e":
                newKey = "6";
                checkCount();
            break;
            case "r":
                newKey = "7";
                checkCount();
            break;
            case "a":
                newKey = "8";
                checkCount();
            break;
            case "s":
                newKey = "9";
                checkCount();
            break;
            case "d":
                newKey = "10";
                checkCount();
            break;
            case "f":
                newKey = "11";
                checkCount();
            break;
            case "z":
                newKey = "12";
                checkCount();
            break;
            case "x":
                newKey = "13";
                checkCount();
            break;
            case "c":
                newKey = "14";
                checkCount();
            break;
            case "v":
                newKey = "15";
                checkCount();
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