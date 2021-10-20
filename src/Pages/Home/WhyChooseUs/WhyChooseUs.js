import React, { useEffect, useState } from 'react';
import ambulance from '../../../images/icons/ambulance.png'
import doctor from '../../../images/icons/doctor.png'
import stethoscope from '../../../images/icons/stethoscope.png'
import fullhourservice from '../../../images/icons//24-hours.png'
import './WhyChooseUs.css'
import { Button } from 'react-bootstrap';

const WhyChooseUs = () => {
    
    return (
      <div className="container ">
        <div className="choose-section">
          <div>
            <div className="text-center w-75 mx-auto mb-5">
              <h3>Why Choose Carenting?</h3>
              <p>
                When you visit Carenting, you’ll gain access to advanced
                technology, treatments and research that may not be available
                elsewhere.
              </p>
            </div>
            <div className="choose-area-box">
              <div className="d-flex choose-area">
                <div className="me-3">
                  <img src={ambulance} alt="" />
                </div>
                <div>
                  <h5>Emergency Service</h5>
                  <p>
                    Patients with the most severe emergencies receive immediate
                    treatment. That is why some patients
                  </p>
                </div>
              </div>
              <div className="d-flex choose-area">
                <div className="me-3">
                  <img src={doctor} alt="" />
                </div>
                <div>
                  <h5>Qualified Doctors</h5>
                  <p>
                    Your Family Medical Centre. Welcome to Carenting. We take
                    pride in offering the highest standard of medical care.
                  </p>
                </div>
              </div>
              <div className="d-flex choose-area">
                <div className="me-3">
                  <img src={stethoscope} alt="" />
                </div>
                <div>
                  <h5>Outdoors Checkup</h5>
                  <p>
                    Find the perfect doctor checkup outdoor stock photo. Huge
                    collection, amazing choice,
                  </p>
                </div>
              </div>
              <div className="d-flex choose-area">
                <div className="me-3">
                  <img src={fullhourservice} alt="" />
                </div>
                <div>
                  <h5>24 Hours Service</h5>
                  <p>
                    We never close. Our 24 Hour Call Center Helps You Deliver
                    Professional Customer Service 24/7/365.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <form className="bg-light p-5">
              <input
                className="form-control mb-4 p-2"
                type="text"
                placeholder="First Name"
              />
              <input
                className="form-control mb-4 p-2"
                type="text"
                placeholder="Last Name"
              />
              <select className="form-control mb-4 p-2">
                <option className="form-control" value="0">
                  Select Your Service:
                </option>
                <option className="form-control" value="1">
                  Neurology
                </option>
                <option className="form-control" value="2">
                  Opthalmology
                </option>
                <option className="form-control" value="3">
                  Nuclear Magnetic
                </option>
                <option className="form-control" value="4">
                  Surgical
                </option>
                <option className="form-control" value="5">
                  Cardiology
                </option>
                <option className="form-control" value="6">
                  X-ray
                </option>
                <option className="form-control" value="7">
                  Dental
                </option>
                <option className="form-control" value="8">
                  Traumatology
                </option>
                <option className="form-control" value="9">
                  Cardiology
                </option>
              </select>
              <input
                className="form-control mb-4 p-2"
                type="tel"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              />
              <input className="form-control mb-4 p-2" type="time" />
              <input className="form-control mb-4 p-2" type="date" />
              <textarea className="form-control" cols="20" rows="0"></textarea>
              <div className="text-center mt-3">
                <Button className="custom-btn">Make an appointment</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default WhyChooseUs;