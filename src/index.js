import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Controls from './components/Controls';
import AllPads from './components/AllPads';

ReactDOM.render(
  <React.StrictMode>
    <div className="interface">
      <Controls />
      <AllPads mode="drumSounds" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
