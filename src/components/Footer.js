import React from 'react';
import {Button} from "./Button";
import "./Footer.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Sign up for the Andromeda newsletter for updates on discount packages and  exciting new destinations
                </p>
                <p className="footer-subscription-text">
                    Susbscription can be cancelled at anytime!
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your mail"className="footer-input"/>
                        <Button buttonStyle="btn--outline">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to="/" >Testimonials</Link>
                        <Link to="/" >Careers</Link>
                        <Link to="/" >Investors</Link>

                        <Link to="/" >Terms of Service</Link>

                         </div>
                         <div className="footer-link-items">
                        <h2>About</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to="/" >Testimonials</Link>
                        <Link to="/" >Careers</Link>
                        <Link to="/" >Investors</Link>

                        <Link to="/" >Terms of Service</Link>

                         </div>
                        
                </div>
                <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/"  className="social-logo">
                            ANDROMEDA<i className="fas fa-star"/>
                            
                            </Link>
                    </div>
                    <small className="website-rights">
                        ANDROMEDA © 2021
                    </small>
                    <div className="socials-icons">
                        <Link className="social-icon-link facebook"
                        to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f">

                            </i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram">

                            </i>
                        </Link>
                        <Link className="social-icon-link twitter"
                        to="/" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter">

                            </i>
                        </Link>
                        <Link className="social-icon-link LinkedIn"
                        to="/" target="_blank" aria-label="Linked In">
                            <i className="fab fa-linkedin">

                            </i>
                        </Link>
                        <Link className="social-icon-link youtube"
                        to="/" target="_blank" aria-label="Youtube">
                            <i className="fab fa-youtube">

                            </i>
                        </Link>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Footer
