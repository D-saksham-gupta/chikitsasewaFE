import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 my-2 cursor"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h4 className="card-title ct">
        {doctor.firstName} {doctor.lastName}
      </h4>
      <hr />
      <p>
        <b>
          Sr. {doctor.specialization} (Experience: {doctor.experience} years+)
        </b>
      </p>
      <p className="card-text">
        <b>Phone Number: </b>
        {doctor.phoneNumber}
      </p>
      <p className="card-text">
        <b>Address: </b>
        {doctor.address}
      </p>
      <p className="card-text">
        <b>Fees per visit: </b>
        {doctor.feePerConsultation}
      </p>
      <p className="card-text">
        <b>Timings: </b>
        10 AM to 5 PM
      </p>
    </div>
  );
}

export default Doctor;
