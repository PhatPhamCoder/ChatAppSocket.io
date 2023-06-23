import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import instance from "../config/axiosConfig";
import { allUserRoute, userRoute, host } from "../utils/APIRoutes";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";
import ChatContainer from "../components/ChatContainer";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
    border-radius: 2rem;
  }
`;

const Chat = () => {
  const socket = useRef();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);

  useEffect(() => {
    instance
      .get(`${allUserRoute}/${window.localStorage.getItem("ID")}`)
      .then((res) => setData(res.data.data));
  }, []);

  useEffect(() => {
    instance
      .get(`${userRoute}/${window.localStorage.getItem("ID")}`)
      .then((res) => setCurrentUser(res.data));
  }, []);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser?.dataRes?.[0]?.id);
    }
  }, [currentUser]);

  useEffect(() => {
    const decode = jwtDecode(window.localStorage.getItem("refreshToken"));
    if (decode) {
      if (decode?.exp > Date.now()) {
        localStorage.clear("accessToken");
        navigate("/login");
      } else if (decode?.exp > Date.now()) {
        navigate("/");
      }
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Container>
      <div className="container">
        <Contacts
          contacts={data}
          currentUser={currentUser}
          changeChat={handleChatChange}
        />
        {currentChat === undefined ? (
          <Welcome currentUser={currentUser} />
        ) : (
          <ChatContainer
            currentChat={currentChat}
            currentUser={currentUser}
            socket={socket}
          />
        )}
      </div>
    </Container>
  );
};

export default Chat;
