import React from 'react';
import address from '../../../contactimage/1.png'
import phone from '../../../contactimage/2.png'
import email from '../../../contactimage/3.png'
import './ContactSection.css'

const ContactSection = () => {
    return (
      <div className="container contact">
        <div className="text-center mx-auto contact-header">
          <h3>Have a Questions?</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div className="d-flex justify-content-center contact-area">
          <div className="mx-auto text-center contact-box">
            <img className="img-fluid" src={address} alt="" />
            <h6>ADDRESS</h6>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div className="mx-auto text-center contact-box">
            <img className="img-fluid" src={phone} alt="" />
            <h6>CONTACT NUMBER</h6>
            <p>+ 1235 2355 98</p>
          </div>
          <div className="mx-auto text-center contact-box">
            <img className="img-fluid" src={email} alt="" />
            <h6>EMAIL ADDRESS</h6>
            <p>info@yoursite.com</p>
          </div>
        </div>
      </div>
    );
};

export default ContactSection;