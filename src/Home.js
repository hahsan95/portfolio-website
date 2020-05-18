import React, { Component } from 'react';
import './main.css';

export default class Home extends Component 
    {
    render() {

      return (
        <section id="home" className="s-home target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <h3>Welcome to Glint</h3>
            <h1>
              We are a creative group <br />
              of people who design <br />
              influential brands and <br />
              digital experiences.
            </h1>
            <div className="home-content__buttons">
              <a href="#contact" className="smoothscroll btn btn--stroke">
                Start a Project
              </a>
              <a href="index.html#about" className="smoothscroll btn btn--stroke">
                More About Us
              </a>
            </div>
          </div>
          <div className="home-content__scroll">
            <a href="#styles" className="scroll-link smoothscroll">
              <span>Scroll Down</span>
            </a>
          </div>
          <div className="home-content__line" />
        </div> 
        <ul className="home-social">
          <li>
            <a href="#0"><i className="fa fa-facebook" aria-hidden="true" /><span>Facebook</span></a>
          </li>
          <li>
            <a href="#0"><i className="fa fa-twitter" aria-hidden="true" /><span>Twiiter</span></a>
          </li>
          <li>
            <a href="#0"><i className="fa fa-instagram" aria-hidden="true" /><span>Instagram</span></a>
          </li>
          <li>
            <a href="#0"><i className="fa fa-behance" aria-hidden="true" /><span>Behance</span></a>
          </li>
          <li>
            <a href="#0"><i className="fa fa-dribbble" aria-hidden="true" /><span>Dribbble</span></a>
          </li>
        </ul> 
      </section> 
      );
    }
};