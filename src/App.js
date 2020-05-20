import React from 'react';
import logo from './logo.svg';
import './App.css';
import AOS from 'aos';

/* Components */
import { Header, Home, About, Services, Works } from './components/index.js';

class App extends React.Component {
  componentDidMount() {
    AOS.init()
  }
  render(){
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
}

export default App;
