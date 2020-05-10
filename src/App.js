import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Header.js'

function App() {
  return (
    <div className="App">
    <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

export default App;
