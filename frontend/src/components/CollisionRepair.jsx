import React from 'react';
// import './CollisionRepair.css';
// import beforeImage from '../assets/before.jpg';   // Replace with actual image paths
// import afterImage from '../assets/after.jpg';
import { useNavigate } from 'react-router-dom';

const CollisionRepair = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate('/appointment');
  };

  return (
    <div className="collision-repair-container">
      <h1>Collision Repair Services</h1>
      <p className="description">
        We specialize in high-quality collision repair to get your vehicle looking brand new.
        Whether it’s a minor dent or major bodywork, our expert technicians will restore your car to its pre-accident condition.
      </p>

      <div className="image-comparison">
        <div className="image-box">
          <h3>Before</h3>
          {/* <img src={beforeImage} alt="Before repair" /> */}
        </div>
        <div className="image-box">
          <h3>After</h3>
          {/* <img src={afterImage} alt="After repair" /> */}
        </div>
      </div>

      <button className="appointment-button" onClick={handleAppointmentClick}>
        Schedule an Appointment
      </button>
    </div>
  );
};

export default CollisionRepair;