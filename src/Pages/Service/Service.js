import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id, title, image, shortdescription} = props.service;

    return (
      <div className="single-service">
        <div>
          <img src={image} alt="" />
          <h5>{title}</h5>
          <p>{shortdescription}</p>
        </div>
        <Link to={`/booking/${id}`}>
          <Button className="btn custom-btn">Appointment</Button>
        </Link>
      </div>
    );
};

export default Service;