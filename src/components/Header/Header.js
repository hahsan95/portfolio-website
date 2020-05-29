import React, { Component } from 'react';

export default class Header extends Component 
    {


      componentDidMount() {
        let logoSwitch = document.querySelector('.header-logo');
        let counter = 0;
        function switchTheme(e) {
          
          if (counter%2==0) {
            document.documentElement.setAttribute('data-theme', 'dark');
            counter++;
          } else {
            document.documentElement.removeAttribute('data-theme', 'dark');
            counter++;
          }
        
      }
      
      logoSwitch.addEventListener('click', switchTheme, false);
      
      }

    render() {
      return (
        <header className="s-header">
          <div className="header-logo"> 
            <a className="site-logo">
              <img src="images/logo3.png" alt="Homepage" />
            </a>
          </div>
          <nav className="header-nav">
            <a href="#0" className="header-nav__close" title="close"><span>Close</span></a>
            <div className="header-nav__content">
              <h3>Navigation</h3>
              <ul className="header-nav__list">
                <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
                <li><a className="smoothscroll" href="#about" title="about">About</a></li>
                <li><a className="smoothscroll" href="#services" title="services">Services</a></li>
                <li><a className="smoothscroll" href="#works" title="works">Works</a></li>
                <li><a className="smoothscroll" href="#clients" title="clients">Clients</a></li>
                <li><a className="smoothscroll" href="#contact" title="contact">Contact</a></li>
              </ul>
              <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href="#0">voluptatem</a> porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>
              <ul className="header-nav__social">
                <li>
                  <a href="#"><i className="fa fa-facebook" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-twitter" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-instagram" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-behance" /></a>
                </li>
                <li>
                  <a href="#"><i className="fa fa-dribbble" /></a>
                </li>
              </ul>
            </div>
          </nav> 
          <a className="header-menu-toggle" href="#0">
            <span className="header-menu-text">Menu</span>
            <span className="header-menu-icon" />
          </a>
        </header> 
      );
    }
};