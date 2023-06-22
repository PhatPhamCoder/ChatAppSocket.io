import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BiPowerOff } from "react-icons/bi";
import { socket } from "../utils/Socket";
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;

const LogOut = () => {
  const navigate = useNavigate();

  const disconnect = () => {
    socket.disconnect();
  };
  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
    disconnect();
  };
  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
};

export default LogOut;
