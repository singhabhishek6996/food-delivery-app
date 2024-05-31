import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="" />
          <p>
            🍽️ Explore UrbanEats, where every bite tells a story! Discover a
            world of flavor with our diverse menu, curated to satisfy every
            craving. From fresh salads to sizzling entrees, we're here to
            elevate your dining experience. Order now and let your taste buds
            dance with delight! #UrbanEats #FlavorfulJourneys
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9876543210</li>
            <li>UrbanEats@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © UrbanEats.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
