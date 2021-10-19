import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import './ServiceSection.css'


const ServiceSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch("./service.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);

    return (
      <>
        <h2 className="text-danger text-center service">Specialist areas</h2>
        <div className="service-container container text-center">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </>
    );
};

export default ServiceSection;