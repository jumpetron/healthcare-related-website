import React from 'react';
import './FunFacts.css'

const FunFacts = () => {
    return (
      <div className="funfact">
        <div className="over-fun">
          <p>FUN FACTS</p>
          <h2>Over 5,100 patients trust us</h2>
        </div>
        <div className="experience">
          <div className="single-fact-one single-fact">
            <h3>30</h3>
            <p>Years of Experienced</p>
          </div>
          <div className="single-fact-two single-fact">
            <h3>4,500</h3>
            <p>Happy Patients</p>
          </div>
          <div className="single-fact-three single-fact">
            <h3>84</h3>
            <p>Number of Doctors</p>
          </div>
          <div className="single-fact">
            <h3>300</h3>
            <p>Number of Staffs</p>
          </div>
        </div>
      </div>
    );
};

export default FunFacts;