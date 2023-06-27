import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import LogOut from "./Logout";
import ChatInput from "./ChatInput";
import { getAllMessageRoute, host, messageRoute } from "../utils/APIRoutes";
import instance from "../config/axiosConfig";
const ChatContainer = ({ currentChat, currentUser, socket }) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const handleSendMsg = async (msg) => {
    try {
      if (!currentUser || !currentChat) {
        // Handle missing dependencies
        console.error("Missing dependencies");
        return;
      }

      const fromId = currentUser?.dataRes?.[0]?.id;
      const toId = currentChat?.id;

      await instance.post(messageRoute, {
        from: fromId,
        to: toId,
        message: msg,
      });

      socket.current.emit("send-msg", {
        from: fromId,
        to: toId,
        message: msg,
      });

      const updatedMessages = [
        ...messages,
        { fromSelf: true, sendto: toId, message: msg },
      ];
      setMessages(updatedMessages);
    } catch (error) {
      // Handle error
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({
          fromSelf: false,
          sendto: currentChat?.id,
          message: msg,
        });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (currentChat) {
      instance
        .post(getAllMessageRoute, {
          from: currentUser?.dataRes?.[0]?.id,
          to: currentChat?.id,
        })
        .then((res) => setMessages(res.data.data))
        .catch((err) => console.error(err));
    }
  }, [currentChat]);

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
            <h3>{currentChat?.username}</h3>
          </div>
        </div>
        <div className="logout">
          <h2>
            <LogOut />
          </h2>
        </div>
      </div>
      {/* <Messages /> */}
      <div className="chat-messages" ref={scrollRef}>
        {messages.map((msg, index) => {
          return (
            <div key={index}>
              <div
                className={`message ${
                  currentChat?.id === msg?.sendto ||
                  currentUser?.dataRes?.[0]?.id === msg?.sendto
                    ? `${msg.fromSelf ? "sender" : "received"}`
                    : "hidden-chat"
                }`}
              >
                <div className="content">
                  {msg.message !== null ? (
                    msg.message
                  ) : currentChat?.id === msg?.sendFrom ||
                    currentUser?.dataRes?.[0]?.id === msg?.sendFrom ? (
                    msg.image.split(".").pop() === "rar" ? (
                      <p>{msg.image}</p>
                    ) : (
                      <img
                        src={`${host}/thumb/${msg.sendFrom}/` + msg.image}
                        alt=""
                      />
                    )
                  ) : msg.image.split(".").pop() === "rar" ? (
                    <p>{msg.image}</p>
                  ) : (
                    <img
                      src={`${host}/thumb/${msg.sendto}/` + msg.image}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} currentChat={currentChat?.id} />
    </Container>
  );
};

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
        max-width: 40%;
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
    }

    .received {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }

    .hidden-chat {
      display: none;
    }
  }
`;

export default ChatContainer;
