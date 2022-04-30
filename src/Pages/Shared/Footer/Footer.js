import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
      <div className="row row-cols-auto mx-auto p-3 footer-style">
        <div className="col">
          <h3>SHOP</h3>
          <p>Men</p>
          <p>Gift Sets</p>
          <p>Brands</p>
          <p>On Sale</p>
          <p>Blog</p>
        </div>

        <div className="col">
          <h3>INFORMATION</h3>
          <p>Sitemap</p>
          <p>info@scentitude.com</p>
          <p>+91478224224</p>
        </div>

        <div className="col">
          <h3>CONTACT US</h3>
          <form>
            <input type="text" name="name" id="" placeholder="Your Name" />
            <input type="email" name="email" id="" placeholder="Email" />
            <input type="text" name="phone" id="" placeholder="Phone" />
            <button>SEND</button>        
          </form>
        </div>
        <div className="col">
                <h3>Follow Us</h3>
                
        </div>
      </div>
    );
};

export default Footer;