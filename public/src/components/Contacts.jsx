import React, { useState } from "react";
import { styled } from "styled-components";
import { socket } from "../utils/Socket";

const Contacts = ({ contacts, currentUser, changeChat }) => {
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const [room, setRoom] = useState();
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <Container>
      <div className="brand">
        <img src="https://optech.vn/public/tkw/images/logo/logo2.png" alt="" />
      </div>

      <div className="join-room">
        <input
          type="text"
          placeholder="Nhập mã Phòng"
          style={{
            outline: "none",
            padding: "5px",
            borderRadius: "10px",
            border: "0px",
            fontWeight: "bold",
          }}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button
          style={{
            border: "0px",
            outline: "none",
            borderRadius: "8px",
            padding: "4px",
            fontWeight: "bold",
            color: "red",
            cursor: "pointer",
            marginLeft: "0.4rem",
          }}
          onClick={joinRoom}
        >
          Join
        </button>
      </div>
      <div className="contacts">
        {contacts?.map((contact, index) => {
          return (
            <div
              className={`contact ${
                index === currentSelected ? "selected" : ""
              }`}
              key={index}
              onClick={() => changeCurrentChat(index, contact)}
            >
              {contact.username}
            </div>
          );
        })}
      </div>
      <div className="current-user">{currentUser?.dataRes[0]?.username}</div>
    </Container>
  );
};

export default Contacts;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: #080420;
  border-radius: 2rem 0rem 0rem 2rem;

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: white;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      img {
        width: 80%;
      }
    }

    @media screen and (min-width: 480px) and (max-width: 680px) {
      img {
        display: none;
      }
    }
  }

  .join-room {
    margin-top: 0.6rem;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
    color: white;
    overflow: auto;
    width: 100%;
    padding: 1rem 1rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        border-radius: 1rem;
        width: 0.1rem;
      }
    }
    .contact {
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-style: none;
      margin-bottom: 1rem;
      background-color: #ffffff39;
      padding: 0.5rem;
      border-radius: 1rem;
      cursor: pointer;
      font-weight: bold;
    }
    .selected {
      background-color: #9a86f3;
    }
  }

  .current-user {
    color: white;
    background-color: #0d0d30;
    width: 100%;
    text-align: center;
    padding: 1rem 0rem;
    font-weight: bold;
  }
`;
