import React from "react";
import "./Footer.css";

import facebook from "../../../images/facebook.png";
import twitter from "../../../images/twitter.png";
import instagram from "../../../images/instagram.png";
import youtube from "../../../images/youtube.png";
import paymentIcon from '../../../images/paymentIcon.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row  justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-4 p-5 footer-style">
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
              <input
                className="mb-1"
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
              />
              <input
                className="mb-1"
                type="email"
                name="email"
                id=""
                placeholder="Email"
              />
              <input
                className="mb-1"
                type="text"
                name="phone"
                id=""
                placeholder="Phone"
              />
              <button className="btn btn-primary d-flex ">SEND</button>
            </form>
          </div>
          <div className="col">
            <h3>Follow Us</h3>
            <div>
              <div className="mb-2">
                <img className="me-2" src={facebook} alt="" />
                <img src={youtube} alt="" />
              </div>
              <div>
                <img className="me-2" src={instagram} alt="" />
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <div className="container p-3">
          <div className="row align-items-center justify-content-center">
            <div className="col-4">
              <h6>Copyright Scentitude &copy; 2022, All rights reserved.</h6>
            </div>
            <div className="col-4">
              <h5>
                Payment options available <img src={paymentIcon} alt="" />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
