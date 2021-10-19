import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctors = (props) => {
    const { id, title, image, role, department } = props.doctor;
    return (
      <div className="single-doctor">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <h6 className="text-primary">{department}</h6>
        <p>{role}</p>
        <Link to={`/booking/${id}`}>
          <Button className="custom-btn">Book Now</Button>
        </Link>
      </div>
    );
};

export default Doctors;