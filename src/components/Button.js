
import React from 'react';
import '../styles/pads.css';

function Button(props) {

  return (
    <div className="selection">
      <button id={props.id} className={props.className} onClick={props.onClick}></button>
      <h4>{props.text}</h4>
    </div>
  );
}

export default Button;
