import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
    
    
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  background-color: #0d0d30;
  border: 2px solid blue;
  border-radius: 50%;
  cursor: pointer;
  &:hover{
    background-color: #05193C;
    height: 2.7rem;
    width: 2.7rem;
  }
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
