import React, { Component } from 'react';

export default class Clients extends Component 
    {

    render() {
      return (
        <section id="clients" className="s-clients">
        <div className="row section-header" data-aos="fade-up">
          <div className="col-full">
            <h3 className="subhead">Our Clients</h3>
            <h1 className="display-2">Homum has been honored to
              partner up with these clients</h1>
          </div>
        </div> 
        <div className="row clients-outer" data-aos="fade-up">
          <div className="col-full">
            <div className="clients">
              <a href="#0" title className="clients__slide"><img src="images/clients/apple.png" /></a>
              <a href="#0" title className="clients__slide"><img src="images/clients/atom.png" /></a>
              <a href="#0" title className="clients__slide"><img src="images/clients/blackberry.png" /></a>
              <a href="#0" title className="clients__slide"><img src="images/clients/dropbox.png" /></a>
              <a href="#0" title className="clients__slide"><img src="images/clients/envato.png" /></a>
              <a href="#0" title className="clients__slide"><img src="images/clients/firefox.png" /></a>
              <a href="#0" title className="clients__slide"><img src="images/clients/joomla.png" /></a>
              <a href="#0" title className="clients__slide"><img src="images/clients/magento.png" /></a>
            </div> 
          </div> 
        </div> 
        <div className="row clients-testimonials" data-aos="fade-up">
          <div className="col-full">
            <div className="testimonials">
              <div className="testimonials__slide">
                <p>Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. 
                  Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium quos qui praesentium corpori.
                  Excepturi nam cupiditate culpa doloremque deleniti repellat.</p>
                <img src="images/avatars/user-01.jpg" alt="Author image" className="testimonials__avatar" />
                <div className="testimonials__info">
                  <span className="testimonials__name">Tim Cook</span> 
                  <span className="testimonials__pos">CEO, Apple</span>
                </div>
              </div>
              <div className="testimonials__slide">
                <p>Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                  Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.</p>
                <img src="images/avatars/user-05.jpg" alt="Author image" className="testimonials__avatar" />
                <div className="testimonials__info">
                  <span className="testimonials__name">Sundar Pichai</span> 
                  <span className="testimonials__pos">CEO, Google</span>
                </div>
              </div>
              <div className="testimonials__slide">
                <p>Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                  Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.</p>
                <img src="images/avatars/user-02.jpg" alt="Author image" className="testimonials__avatar" />
                <div className="testimonials__info">
                  <span className="testimonials__name">Satya Nadella</span> 
                  <span className="testimonials__pos">CEO, Microsoft</span>
                </div>
              </div>
            </div>
          </div> 
        </div> 
      </section> 
      );
    }
};