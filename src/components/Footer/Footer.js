import React, { Component } from 'react';

export default class Contact extends Component 
    {

    render() {
      return (
        <footer>
        <div className="row footer-main">
          <div className="col-six tab-full left footer-desc">
            <div className="footer-logo" />
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat voluptas autem necessitatibus vitae aut.
          </div>
          <div className="col-six tab-full right footer-subscribe">
            <h4>Get Notified</h4>
            <p>Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.</p>
            <div className="subscribe-form">
              <form id="mc-form" className="group" noValidate="true">
                <input type="email" defaultValue name="EMAIL" className="email" id="mc-email" placeholder="Email Address" required />
                <input type="submit" name="subscribe" defaultValue="Subscribe" />
                <label htmlFor="mc-email" className="subscribe-message" />
              </form>
            </div>
          </div>
        </div> 
        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Copyright Glint 2017</span> 
              <span>Site Template by <a href="https://www.colorlib.com/">Colorlib</a></span>	
            </div>
            <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon-arrow-up" aria-hidden="true" /></a>
            </div>
          </div>
        </div> 
      </footer>
      );
    }
};