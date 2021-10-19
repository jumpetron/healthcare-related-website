import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
      <div className="banner-img banner-box">
        <div className="container banner">
          <div className="w-50">
            <h5 className="text-white">WELCOME TO CARENTING</h5>
            <h2 className="text-white">We are here for your Care</h2>
            <p className="text-white">
              We provide a full range of family care and more than 40 specialty
              and subspecialty health care services for patients in our service
              area. Explore specialized care or select a particular service to
              learn more.
            </p>
            <Button className="btn custom-btn">Learn More</Button>
          </div>
        </div>
      </div>
    );
};

export default Banner;