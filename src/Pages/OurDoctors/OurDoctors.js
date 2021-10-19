import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './OurDoctors.css'

const OurDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
      fetch("./doctors.json")
        .then((res) => res.json())
        .then((data) => setDoctors(data));
    }, []);
    return (
      <>
        <div className="our-blog-header">
          <h3>Our Qualified Doctors</h3>
          <p>
            A community of information and resources to improve your health and
            well-being.
          </p>
        </div>
        <div className="doctors-area container">
          {doctors.map((doctor) => (
            <div className="single-doctor">
              <img src={doctor.image} alt="" />
              <h3>{doctor.title}</h3>
              <h6 className="text-primary">{doctor.department}</h6>
              <p>{doctor.role}</p>
              <Button className="custom-btn">Book Now</Button>
            </div>
          ))}
        </div>
      </>
    );
};

export default OurDoctors;