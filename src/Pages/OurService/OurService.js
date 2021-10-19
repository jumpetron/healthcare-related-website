import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './OurService.css'

const OurService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("./service.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    return (
      <>
        <div className="service-header">
          <h2 className="text-danger">Specialties, Services & Treatments</h2>
          <p>
            We provide a full range of family care and more than 40 specialty
            and subspecialty health care services for patients in our service
            area. Explore specialized care or select a particular service to
            learn more.
          </p>
        </div>
        <div className="service-container container text-center">
          {services.map((service) => (
            <div className="single-service">
              <div>
                <img src={service.image} alt="" />
                <h5>{service.title}</h5>
                <p>{service.shortdescription}</p>
              </div>
              <Button className="btn custom-btn">Appointment</Button>
            </div>
          ))}
        </div>
      </>
    );
};

export default OurService;