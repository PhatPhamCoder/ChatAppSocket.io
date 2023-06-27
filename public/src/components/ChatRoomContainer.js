import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import LogOut from "./Logout";
import ChatInput from "./ChatInput";
import {
  getAllMessageRoomRoute,
  host,
  messageRoomRoute,
} from "../utils/APIRoutes";
import instance from "../config/axiosConfig";
import { socket } from "../utils/Socket";

const ChatRoomContainer = ({ currentUser, currentChatRoom }) => {
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState();
  console.log(messages);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  // console.log(arrivalMessage);

  const handleSendMsg = async (msg) => {
    try {
      if (!currentUser || !currentChatRoom) {
        console.error("Missing dependencies");
        return;
      }
      const fromId = currentUser?.dataRes?.[0]?.id;
      const toId = currentChatRoom?.roomId;

      await instance.post(messageRoomRoute, {
        from: fromId,
        roomId: toId,
        message: msg,
      });

      socket.emit("Send-message-room", {
        from: fromId,
        roomId: toId,
        msg,
      });

      const updatedMessages = [
        ...messages,
        {
          // fromSelf: currentUser?.dataRes[0]?.id !== msg?.from,
          fromSelf: true,
          sendto: toId,
          message: msg,
        },
      ];
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on("recieve-message-room", (msg) => {
        setArrivalMessage({
          // fromSelf: currentUser?.dataRes[0]?.id === msg?.from,
          fromSelf: false,
          sendto: currentChatRoom?.roomId,
          message: msg.msg,
        });
      });
    }
  }, [currentUser, currentChatRoom]);

  useEffect(() => {
    if (arrivalMessage) {
      arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (currentChatRoom) {
      instance
        .post(getAllMessageRoomRoute, {
          from: currentUser?.dataRes?.[0]?.id,
          roomId: currentChatRoom?.roomId,
        })
        .then((res) => setMessages(res.data.data))
        .catch((err) => console.error(err));
    }
  }, [currentChatRoom]);

  return (
    <Container>
      <div className="chat-header">
        <div className="user-detail">
          <div className="avatar">
            <img
              src="https://avatars.githubusercontent.com/u/7805715?v=4"
              alt="avatar"
            />
          </div>
          <div className="username">
            <h3>{currentChatRoom?.roomName}</h3>
          </div>
        </div>
        <div className="logout">
          <h2>
            <LogOut />
          </h2>
        </div>
      </div>

      <div className="chat-messages" ref={scrollRef}>
        {messages?.map((msg, index) => {
          return (
            <div
              className={`message ${msg.fromSelf ? "sender" : "received"}`}
              key={index}
            >
              <div className="content">
                {msg.message !== null ? (
                  msg.message
                ) : currentChatRoom?.roomId === msg?.senderID ||
                  currentUser?.dataRes?.[0]?.id === msg?.senderID ? (
                  msg.image.split(".").pop() === "rar" ? (
                    <form
                      method="get"
                      action={
                        `${host}/room/images/${msg.senderID}/` + msg.image
                      }
                      style={{}}
                    >
                      <button type="submit" className="button-submit">
                        <div>{msg.image}</div>
                      </button>
                    </form>
                  ) : (
                    <img
                      src={`${host}/room/thumb/${msg.senderID}/` + msg.image}
                      alt=""
                    />
                  )
                ) : msg.image.split(".").pop() === "rar" ? (
                  <form
                    method="get"
                    action={`${host}/room/images/${msg.senderID}/` + msg.image}
                    style={{}}
                  >
                    <button type="submit" className="button-submit">
                      <div>{msg.image}</div>
                    </button>
                  </form>
                ) : (
                  <img
                    src={`${host}/room/thumb/${msg.senderID}/` + msg.image}
                    alt=""
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput
        handleSendMsg={handleSendMsg}
        currentChatRoom={currentChatRoom}
      />
    </Container>
  );
};

export default ChatRoomContainer;

const Container = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-rows: 10% 78% 12%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-auto-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    .user-detail {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .logout {
      h2 {
        color: #0d0d30;
        display: flex;
        align-items: center;
        gap: 0.3rem;
        background-color: white;
        border-radius: 0.3rem;
        padding: 0.2rem;
        cursor: pointer;
      }
    }
  }

  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: #080420;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ffffff39;
      border-radius: 1.2rem;
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 50%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;

        img {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: -1rem;
          padding: 0.2rem;
          border-radius: 1rem;
        }
      }
    }
    .sender {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
      .button-submit {
        outline: none;
        border: none;
        background-color: transparent;
        color: white;
        div {
          display: flex;
          word-break: break-word;
        }
      }
    }
    .received {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
      .button-submit {
        outline: none;
        border: none;
        background-color: transparent;
        color: white;
        div {
          display: flex;
          word-break: break-word;
        }
      }
    }

    .hidden-chat {
      display: none;
    }
  }
`;
