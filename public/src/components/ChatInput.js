import React, { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { ImAttachment } from "react-icons/im";
import { axiosUpload } from "../config/axiosConfig";
import { uploadRoute } from "../utils/APIRoutes";

const ChatInput = ({ handleSendMsg, currentChat, currentChatRoom }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState();

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiData, event) => {
    let message = msg;
    message += emojiData.emoji;
    setMsg(message);
  };

  const sendChat = async (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }

    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      await axiosUpload
        .post(
          `${uploadRoute}/${window.localStorage.getItem("ID")}/${currentChat}`,
          formData,
        )
        // .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    }

    if (currentChatRoom?.roomId) {
      const formData = new FormData();
      formData.append("image", file);
      await axiosUpload
        .post(
          `${uploadRoute}/room/${window.localStorage.getItem("ID")}/${
            currentChatRoom?.roomId
          }`,
          formData,
        )
        // .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    }
  };

  const handleUpload = async (e) => {
    const selectedImage = e.target.files[0];
    setFile(selectedImage);
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <CiFaceSmile onClick={handleEmojiPickerHideShow} />
          {showEmojiPicker && <EmojiPicker onEmojiClick={handleEmojiClick} />}
        </div>
        <div className="file-attach">
          <label htmlFor="attach">
            <ImAttachment />
          </label>
          <input
            type="file"
            id="attach"
            hidden
            onChange={(e) => handleUpload(e)}
          />
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
          <FiSend />
        </button>
      </form>
    </Container>
  );
};
export default ChatInput;

const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  background-color: #080420;
  padding: 0.1rem 2rem;
  .button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    gap: 0.5rem;

    .file-attach {
      color: white;
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      margin-right: 0.2rem;
    }
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
        left: -24px !important;
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
    position: relative;
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    gap: 2rem;
    background-color: #ffffff34;
    input {
      width: 100%;
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
      position: absolute;
      right: 1rem;
      align-items: center;
      display: flex;
      background-color: transparent;
      color: white;
      border-radius: 0.5rem;
      outline: none;
      border: none;
      cursor: pointer;
      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
