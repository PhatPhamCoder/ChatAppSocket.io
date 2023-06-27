import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import instance from "../config/axiosConfig";
import {
  allUserRoute,
  userRoute,
  host,
  getRoomRoute,
} from "../utils/APIRoutes";
import Contacts from "../components/Contacts";
import ChatContainer from "../components/ChatContainer";
import { io } from "socket.io-client";
import ChatRoomContainer from "../components/ChatRoomContainer";
import socketIOClient from "socket.io-client";

const Chat = () => {
  const socket = useRef();
  const [data, setData] = useState();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentChatRoom, setCurrentChatRoom] = useState(undefined);
  const [room, setRoom] = useState();
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    instance
      .get(`${getRoomRoute}/${window.localStorage.getItem("ID")}`)
      .then((res) => setRoom(res.data.data));
  }, []);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
    setOpen(!open);
  };

  const handleRoomChange = async (chatRoom) => {
    setCurrentChatRoom(chatRoom);
    setOpen(!open);
  };

  useEffect(() => {
    if (currentUser) {
      socket.current = socketIOClient.connect(host);
      socket.current.emit("add-user", currentUser?.dataRes?.[0]?.id);
    }
  }, [currentUser]);

  return (
    <Container>
      <div className="container">
        <Contacts
          contacts={data}
          roomData={room}
          currentUser={currentUser}
          changeChat={handleChatChange}
          changeRoom={handleRoomChange}
        />
        {open ? (
          <ChatContainer
            currentChat={currentChat}
            currentUser={currentUser}
            socket={socket}
          />
        ) : (
          <ChatRoomContainer
            currentChat={currentChat}
            currentUser={currentUser}
            currentChatRoom={currentChatRoom}
          />
        )}
      </div>
    </Container>
  );
};

export default Chat;

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
