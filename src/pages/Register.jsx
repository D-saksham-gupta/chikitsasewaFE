import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../components/Healthcare-PNG-HD (1).png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

export default function Register() {
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 7) {
      toast.error(
        "Full Name should be greater than 6 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        // setIsLoading(true);

        navigate("/");
      }
    }
  };

  return (
    <>
      {/* <FormContainer>
    <img src={loader} alt="loader" className="loader" />
    </FormContainer> */}

      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>Chikitsa Sewa</h1>
          </div>
          <input
            type="text"
            placeholder="Full Name"
            name="username"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="file"
            placeholder="Government Certified License"
            name="License"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          <span>Please verify your Medical License</span>
          <button type="submit">Doctor Registration</button>

          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  max-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #3c9ae2;

  border-radius: 2px;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    .loader {
      max-inline-size: 100%;
      color: #131324;
      background-color: #131324;
    }
    img {
      height: 5rem;
      border-radius: 50%;
      border: 4px solid #3c9ae2;
    }
    h1 {
      color: black;
      //text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    background-color: white;
    border: 2px solid #3c9ae2;
    border-radius: 12px;

    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border-style: solid;
    border: none;
    border-bottom: 0.1rem solid #3c9ae2;
    border-radius: 0.4rem;
    color: black;
    width: 100%;
    font-size: 1rem;
    ${
      "" /* &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    } */
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
