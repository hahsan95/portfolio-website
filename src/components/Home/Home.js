import React, { Component } from 'react';

export default class Home extends Component 
    {
    render() {

      return (
        <section id="home" className="s-home target-section" data-parallax="scroll" data-image-src="images/hero-bg-3.jpg" data-position-y="center">
        <div className="overlay" />
        <div className="shadow-overlay" />
        <div className="home-content">
          <div className="row home-content__main">
            <div className="home-content__text">
              <h3>Welcome to my website</h3>
              <h1>
              Har har mar mar my name is zohzoh
              Full stack software engineer <br />
              and recent graduate from <br />
              the University of Chicago. <br />
              Always looking for new <br />
              opportunities to learn.
              </h1>
            </div>
            <div className="home-content__buttons">
              <a href="#contact" className="smoothscroll btn btn--stroke">
                My Resume
              </a>
              <a href="index.html#about" className="smoothscroll btn btn--stroke">
                More About Me
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