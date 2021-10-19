import React, { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';
import './DoctorSection.css'

const DoctorsSection = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
      fetch("./doctors.json")
        .then((res) => res.json())
        .then((data) => setDoctors(data));
    }, []);

    return (
      <>
        <div className="text-center w-50 mx-auto doctor-section">
          <h2 className="text-danger">Our Qualified Doctors</h2>
          <p>
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country
          </p>
        </div>
        <div className="service-container container text-center">
          {doctors.slice(0, 4).map((doctor) => (
            <Doctors key={doctor.id} doctor={doctor}></Doctors>
          ))}
        </div>
      </>
    );
};

export default DoctorsSection;