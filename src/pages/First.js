import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../components/Healthcare-PNG-HD (1).png";

export default function First() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Chikitsa Sewa</h1>
          </div>
          <h2>Are You a Doctor?</h2>

          <button type="submit">Yes</button>
          <span>
            Need a Doctor? <Link to="/categories">Book an Appointment</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #3c9ae2;

  .nobtn {
    display: flex;
    
    gap: 2rem;
    background-color: #ffffff;
    border-radius: 2rem;
    width: 50%
    border: 2px solid #3c9ae2;
  }

  .btn {
    background-color: #3c9ae2;
    color: black;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    img {
      height: 5rem;
      border-radius: 50%;
      border: 4px solid #3c9ae2;
      display: block;
    }
    h1 {
      color: black;
      //text-transform: uppercase;
      display: block;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #ffffff;
    border-radius: 2rem;
    padding: 5rem;
    border: 2px solid #3c9ae2;
  }
  h2{
    color: black;
      //text-transform: uppercase;
      display: block;
      margin: auto
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #3c9ae2;
    border-radius: 0.4rem;
    color: black;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #3c9ae2;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #198ae1;
    }
  }
  span {
    color: black;
    text-transform: uppercase;
    a {
      color: #3c9ae2;
      text-decoration: none;
      font-weight: bold;
      &:hover {
        color: #198ae1;
      }
    }
  }
`;
