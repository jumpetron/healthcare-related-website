import React from 'react';
import { Button } from 'react-bootstrap';
import Aboutsection from '../../../images/About-section.png'
import './AboutSection.css'

const AboutSection = () => {
    return (
      <div>
        <div className="container d-flex justify-content-center align-items-center about-section">
          <div>
            <img className="img-fluid w-75 mb-5" src={Aboutsection} alt="doctor" />
          </div>
          <div className="w-50 about-box">
            <h2>We Are Carenting A Medical Clinic</h2>
            <p>
              Carenting Health System is a family of clinics, hospitals and
              other health care facilities with physical presence in 44
              communities in southern Minnesota, western Wisconsin and
              northeastern Iowa. Our providers bring the knowledge and expertise
              of Mayo Clinic to these communities and many surrounding areas to
              ensure our patients receive world-class health care close to home.
              Patients have access to a full spectrum of health care options,
              with more than 100 medical and surgical services and specialties
              available throughout the system.
            </p>
            <Button className="custom-btn">Learn More</Button>
          </div>
        </div>
      </div>
    );
};

export default AboutSection;