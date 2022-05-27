import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div data-aos="zoom-in">
      <section className="footer-section">
       <div className="footer">
       <div>
          <h2>Brand Name</h2>
          <p>
            We create possibilities <br /> for the connected world.
          </p>
        </div>
        <div>
          <h5>Home</h5>
          <h6>About</h6>
          <h6>Capabilities</h6>
          <h6>Career</h6>
        </div>
        <div>
            <h5>Follow</h5>
            <h6>Instagram</h6>
          <h6>Twitter</h6>
          <h6>LinkedIn</h6>
          <h6>Facebook</h6>
        </div>
        <div>
            <h5>Legal</h5>
          <h6>Privacy Policy</h6>
          <h6>Information</h6>
          <h6>Sign-up</h6>
          <h6>Terms</h6>
        </div>
       </div>
        <h6 style={{paddingBottom:20}}>2022 Brand, All Right Reserve</h6>
      </section>
    </div>
  );
};

export default Footer;
