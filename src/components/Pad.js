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

    function makeSound(value) {
        if (props.mode === "drumSounds") {
            padSound = sounds.drumSounds[value].sound;
        } else if (props.mode === "catSounds") {
            padSound = sounds.catSounds[value].sound;
        }
        return padSound = new Audio(padSound);
    }

    function handleClick() {
        randomMessage();
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
        let message = document.getElementById("message-text");
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

    document.onkeydown = function(e) {
        let keyResult = e.key.toLowerCase();
        let pad = document.getElementById("pad" + keyResult);
        let newKey; 

        switch (keyResult) {
           case "1":
                newKey = "1";
                randomMessage();
            break;
            case "2":
                newKey = "2";
                randomMessage();
            break;
            case "3":
                newKey = "3";
                randomMessage();
            break;
            case "4":
                newKey = "4";
                randomMessage();
            break;
            case "q":
                newKey = "4";
                randomMessage();
            break;
            case "w":
                newKey = "5";
                randomMessage();
            break;
            case "e":
                newKey = "6";
                randomMessage();
            break;
            case "r":
                newKey = "7";
                randomMessage();
            break;
            case "a":
                newKey = "8";
                randomMessage();
            break;
            case "s":
                newKey = "9";
                randomMessage();
            break;
            case "d":
                newKey = "10";
                randomMessage();
            break;
            case "f":
                newKey = "11";
                randomMessage();
            break;
            case "z":
                newKey = "12";
                randomMessage();
            break;
            case "x":
                newKey = "13";
                randomMessage();
            break;
            case "c":
                newKey = "14";
                randomMessage();
            break;
            case "v":
                newKey = "15";
                randomMessage();
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
        <div id={props.id} className="pad" onMouseDown={handleClick} onMouseUp={resetPad} sound={props.sound} mode={props.mode} onClick={props.onClick}>
            <div className="pad-content noselect">
                <div className="sound-title">{padName}</div>
                <div className="pad-assignment">{props.keyAssignment}</div>
            </div>
        </div>
    )
}

export default Pad