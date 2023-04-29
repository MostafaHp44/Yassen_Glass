import React from "react";
import './Footer.css'
import { UilLocationPoint,UilPhone,UilFastMail,UilFacebook,UilMessage} from '@iconscout/react-unicons'
import footerlogo from './logo.png'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Footer = () => {
    return (
    <React.Fragment>
        <div className="MainFooter">
        <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <UilLocationPoint size="50" color="#F9ED77"/>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1شارع سالم خيزه, El-Amal City, Giza Governorate</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <UilPhone size="50" color="#F9ED77"/>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+20 1005208221</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <UilFastMail size="50" color="#F9ED77"/>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>yassenglass@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link to="MainNav"><img src={footerlogo} className="img-fluid" alt="logo" /></Link>
                  </div>
                  <div className="footer-text">
                    <p>اللي اتكسر يتصلح....❤️</p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="https://www.facebook.com/yassenforglass"><UilFacebook/></a>

                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><Link to='MainNav'>Home</Link></li>
                    <li><Link to="MainAboutUs" >about</Link></li>
                    <li><Link to="MainContactUs">Contact Us</Link></li>
                    <li><Link to='MainWork'>Work</Link></li>
                  
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button><UilMessage/></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright © 2023, All Right Reserved <a href="/">Yassen</a></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                  <li><Link to='MainNav'>Home</Link></li>
                    <li><Link to="MainAboutUs" >about</Link></li>
                    <li><Link to="MainContactUs">Contact Us</Link></li>
                    <li><Link to='MainWork'>Work</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    </React.Fragment>
    );
}
 
export default Footer;