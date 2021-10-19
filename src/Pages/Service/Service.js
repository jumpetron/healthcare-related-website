import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Service.css'

const Service = (props) => {
    const {title, image, shortdescription} = props.service;

    return (
        <div className="single-service">
          <div>
            <img src={image} alt="" />
            <h5>{title}</h5>
            <p>{shortdescription}</p>
          </div>
          <Button className="btn custom-btn">Appointment</Button>
        </div>
      
    );
};

export default Service;