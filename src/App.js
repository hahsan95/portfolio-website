import React from 'react';
import logo from './logo.svg';
import './App.css';

/* Components */
import { Header, Home, About, Services, Works } from './components/index.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Works />
    </div>
  );
}

export default App;
