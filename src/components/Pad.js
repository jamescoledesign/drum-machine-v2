import React, { useState, useEffect } from "react";
import { sounds } from "../sounds"

function Pad(props) {
    
    const [padName, setPadName] = useState();
    let message = document.getElementById("message-text");
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

    function makeSound(value) {
        if (props.mode === "drumSounds") {
            padSound = sounds.drumSounds[value].sound;
        } else if (props.mode === "catSounds") {
            padSound = sounds.catSounds[value].sound;
        }
        return padSound = new Audio(padSound);
    }

    function handleClick() {
        checkCount();
        makeSound(props.sound);
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

    function randomMessage() {
        let min = 0;
        let max = 4;
        let messageArr, result;

        const drumMessages = [
            "Let's make noise!",
            "That sounds great!",
            "Are you a pro?",
            "Maybe practice more.",
            "What a banger!"
        ];

        const catMessages = [
            "Are you a feline?",
            "That sounds catlike!",
            "Is it food time?",
            "I don't understand that.",
            "What are you saying?!"
        ];

        result = Math.floor(Math.random() * (max - min + 1) + min);

        if (props.mode === "drumSounds") {
            messageArr = drumMessages;
        } else if (props.mode === "catSounds") {
            messageArr = catMessages;
        } 
        message.innerHTML = messageArr[result];
    }

    function checkCount() {
        let count = "1";
        let countText = document.getElementById("count");
        switch (countText.innerHTML) {
            case "1":
                count = "2";
                countText.innerHTML = count;
            break;
            case "2":
                count = "3";
                countText.innerHTML = count;
            break;
            case "3":
                count = "4";
                countText.innerHTML = count;
            break;
            case "4":
                randomMessage();
                count = "1";
                countText.innerHTML = count;
            break;
            default:
                console.log("Invalid selection");
        }
    }

    document.onkeydown = function(e) {
        let keyResult = e.key.toLowerCase();
        let pad = document.getElementById("pad" + keyResult);
        let newKey; 

        switch (keyResult) {
           case "1":
                newKey = "0";
                checkCount();
            break;
            case "2":
                newKey = "1";
                checkCount();
            break;
            case "3":
                newKey = "2";
                checkCount();
            break;
            case "4":
                newKey = "3";
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
        padSound = makeSound(newKey);
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
        <div id={props.id} className="pad" onMouseDown={handleClick} onMouseUp={resetPad} sound={props.sound} mode={props.mode} onClick={props.onClick} onTouchStart={handleClick} onTouchEnd={resetPad}>
            <div className="pad-content noselect">
                <div className="sound-title">{padName}</div>
                <div className="pad-assignment">{props.keyAssignment}</div>
            </div>
        </div>
    )
}

export default Pad