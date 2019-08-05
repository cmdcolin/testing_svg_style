import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <svg>
        <rect data-testid="myrect" style={{fill:'green'}} x="0" y="0" width="100" height="100"/>
      </svg>
    </div>
  );
}

export default App;
