import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  background-color: #080420;
  padding: 0.3rem 2rem;
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
        margin-left: -1rem;
      }
      .EmojiPickerReact {
        position: absolute !important;
        top: -460px !important;
        left: -30px !important;
        background-color: #9a86f3;
        box-shadow: 0 5px 10px #9a86f3;
        border: #9186f3;
        .epr-body {
          &::-webkit-scrollbar {
            width: 0.7rem;
          }

          &::-webkit-scrollbar-track {
            background-color: white;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #00000034;
            border-radius: 1.2rem;
          }
        }
        .epr-category-nav {
          button {
            background-color: white;
            border-radius: 10px;
          }
        }

        .epr-preview {
          display: none;
        }

        .epr-emoji-category {
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 80%;
      height: 60%;
      background: transparent;
      border: none;
      color: white;
      padding: 0.5rem;
      font-size: 1.2rem;
      outline: none;
      &::selection {
        background-color: #9186f3;
      }
    }
    button {
      display: flex;
      padding: 0.8rem 1rem;
      border-radius: 1rem;
      outline: none;
      border: none;
      cursor: pointer;
      svg {
        font-size: 1.2rem;
      }
    }
  }
`;

const ChatInput = ({ handleSendMsg }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");
  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiData, event) => {
    let message = msg;
    message += emojiData.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
          {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input
          type="text"
          placeholder="Nhập nội dung tin nhắn ...."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
};
export default ChatInput;
