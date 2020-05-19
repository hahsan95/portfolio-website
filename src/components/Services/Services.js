import React, { Component } from 'react';
import '../../main.css';

export default class Services extends Component 
    {

    render() {
      return (

      <section id="services" className="s-services">
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">What We Do</h3>
          <h1 className="display-2">We’ve got everything you need to launch and grow your business</h1>
        </div>
      </div> 
      <div className="row services-list block-1-2 block-tab-full">
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-paint-brush" />
          </div>
          <div className="service-text">
            <h3 className="h2">Brand Identity</h3>
            <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
              Sunt suscipit voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>
        </div>
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-group" />
          </div>
          <div className="service-text">
            <h3 className="h2">Illustration</h3>
            <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
              Sunt suscipit voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>
        </div>
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-megaphone" />
          </div>  
          <div className="service-text">
            <h3 className="h2">Marketing</h3>
            <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
              Sunt suscipit voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>
        </div>
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-earth" />
          </div>
          <div className="service-text">
            <h3 className="h2">Web Design</h3>
            <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
              Sunt suscipit voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>
        </div>
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="icon-cube" />
          </div>
          <div className="service-text">
            <h3 className="h2">Packaging Design</h3>
            <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
              Sunt suscipit voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>
        </div>
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon"><i className="icon-lego-block" /></div>
          <div className="service-text">
            <h3 className="h2">Web Development</h3>
            <p>Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. 
              Quo delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis.
              Sunt suscipit voluptas ipsa in tempora esse soluta sint.
            </p>
          </div>
        </div>
      </div> 
    </section> 
      );
    }
};