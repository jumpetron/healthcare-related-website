import React from 'react';
import './Career.css'

const Career = () => {
    return (
      <div>
        <div className="career-header">
          <h3>Carenting</h3>
          <p>Find a better career with us</p>
        </div>
        <div>
          <div className="container">
            <h3 className="text-center">Work with us</h3>
            <div className="apply-area">
              <div className="apply-box">
                <h4>Medical Professionals</h4>
                <p>Please mail your CV to</p>
                <p>careers.doctors@yourdomain.com</p>
              </div>
              <div className="apply-box">
                <h4>Paramedical & Admin Professionals</h4>
                <p>Please mail your CV to</p>
                <p>careers.doctors@yourdomain.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Career;