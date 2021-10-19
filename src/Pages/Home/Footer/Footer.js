import React from 'react';
import './Footer.css'
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdLocationOn, MdAddIcCall, MdMail } from "react-icons/md";
const Footer = () => {
    return (
      <>
        <div className="d-flex mx-auto justify-content-around footer">
          <div className="footer-single">
            <h5>Carenting</h5>
            <p>
              Far far away, behind the word mountains, far from the countries.
            </p>
            <BsFacebook className="fs-3 me-2 text-primary" />
            <BsInstagram className="fs-3 me-2 text-danger" />
            <BsTwitter className="fs-3 me-2 text-primary" />
          </div>
          <div className="footer-single">
            <h5>Service</h5>
            <p>Neurology</p>
            <p>Opthalmology</p>
            <p>Nuclear Magnetic</p>
            <p>Surgical</p>
            <p>Cardiology</p>
            <p>Dental</p>
          </div>
          <div className="footer-single">
            <h5>Usefull Link</h5>
            <p>About us</p>
            <p>Contact us</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </div>
          <div className="footer-single">
            <h5>Have a Questions?</h5>
            <div className="d-flex">
              <MdLocationOn className="me-2 fs-1" />
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="d-flex">
              <MdAddIcCall className="me-2 fs-4" />
              <p>+2 392 3929 210</p>
            </div>
            <div className="d-flex">
              <MdMail className="me-2 fs-4" />
              <p>info@yourdomain.com</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-5">All Rights Reserved &copy; jumpetron</p>
      </>
    );
};

export default Footer;