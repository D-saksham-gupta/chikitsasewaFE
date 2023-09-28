import React from "react";
import { useNavigate, Link } from "react-router-dom";
function Category() {
  const navigate = useNavigate();
  const handleClick = async (event) => {
    event.preventDefault();
    navigate("/list");
  };
  return (
    <div className="cat">
      <div className="categoryHead">
        <h1>Please Select a Category of Doctor to continue . . .</h1>
      </div>
      <div className="categoryContainer">
        <div className="types" onClick={handleClick}>
          Cardiologists
        </div>
        <div className="types" onClick={handleClick}>
          Audiologists
        </div>
        <div className="types" onClick={handleClick}>
          Dentist
        </div>
        <div className="types" onClick={handleClick}>
          ENT Specialist
        </div>
        <div className="types" onClick={handleClick}>
          Gynecologist
        </div>
        <div className="types" onClick={handleClick}>
          Orthopedic Surgeon
        </div>
        <div className="types" onClick={handleClick}>
          Paediatrician
        </div>
        <div className="types" onClick={handleClick}>
          Psychiatrists
        </div>
        <div className="types" onClick={handleClick}>
          Veterinarian
        </div>
        <div className="types" onClick={handleClick}>
          Radiologist
        </div>
        <div className="types" onClick={handleClick}>
          Pulmonologist
        </div>
        <div className="types" onClick={handleClick}>
          Endocrinologist
        </div>
        <div className="types" onClick={handleClick}>
          Oncologist
        </div>
        <div className="types" onClick={handleClick}>
          Neurologist
        </div>
        <div className="types" onClick={handleClick}>
          Cardiothoracic Surgeon
        </div>
      </div>
    </div>
  );
}

export default Category;
