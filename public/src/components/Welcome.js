import React from "react";
import styled from "styled-components";
import Robot from "../asset/robot.gif";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  img {
    width: 20rem;
  }
  span {
    color: #4e00ff;
  }
`;

const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Xin chào, <span>{currentUser?.dataRes[0]?.username}</span>
      </h1>
      <h3>Lựa chọn chat để bắt đầu</h3>
    </Container>
  );
};
export default Welcome;
