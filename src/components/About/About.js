import React, { Component } from 'react';

export default class About extends Component {

    render() {
      return (
        <section id="about" className="s-about">
        <div className="row section-header has-bottom-sep" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead subhead--dark">Hello There</h3>
            <h1 className="display-1 display-1--light">I am Homum</h1>
          </div>
        </div> 
        <div className="row about-desc" data-aos="fade-up">
          <div className="col-full">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. 
            </p>
          </div>
        </div> 
        <div className="row about-stats stats block-1-4 block-m-1-2 block-mob-full" data-aos="fade-up">
          <div className="col-block stats__col ">
            <div className="stats__count">127</div>
            <h5>Awards Received</h5>
          </div>
          <div className="col-block stats__col">
            <div className="stats__count">1505</div>
            <h5>Cups of Coffee</h5>
          </div>
          <div className="col-block stats__col">
            <div className="stats__count">109</div>
            <h5>Projects Completed</h5>
          </div>
          <div className="col-block stats__col">
            <div className="stats__count">102</div>
            <h5>Happy Clients</h5> 
          </div>
        </div> 
        <div className="about__line" />
      </section> 
      );
    }
  };