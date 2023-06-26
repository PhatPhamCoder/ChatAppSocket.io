import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { loginRoute } from "../utils/APIRoutes";
import instance from "../config/axiosConfig";

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #131324;
  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      background-color: white;
      border-radius: 2rem;
      padding: 5px;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 2rem 5rem;
    input {
      padding: 1rem;
      background: transparent;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af6;
      }
    }
    button {
      outline: none;
      width: fit-content;
      margin: auto;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      border: none;
      background-color: #997af0;
      color: white;
      font-weight: bold;
      cursor: pointer;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        text-decoration: none;
        color: #4e0eff;
        font-weight: bold;
      }
    }
  }
`;

function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  instance.setLocalStorage = async (token, userId, refreshToken) => {
    window.localStorage.setItem("accessToken", token);
    window.localStorage.setItem("ID", userId);
    window.localStorage.setItem("refreshToken", refreshToken);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { password, username, email } = value;
      const { data } = await instance.post(loginRoute, {
        username,
        email,
        password,
      });
      if (data?.result === false) {
        toast.warning(data?.error?.[0]?.msg);
      }
      if (data?.result === true) {
        const { accessToken, refreshToken, userId } = data?.data;
        await instance.setLocalStorage(accessToken, userId, refreshToken);
        toast.success(data?.data?.msg);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    }
  };

  const handleValidation = () => {
    const { password, username } = value;
    if (password.length === "") {
      toast.error("Password and comfirm password show be same!");
      return false;
    } else if (username.length === "") {
      toast.error("User or Email not required!");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <FormContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="brand">
          <img
            src="https://optech.vn/public/tkw/images/logo/logo2.png"
            alt=""
          />
          <h1>Đăng nhập</h1>
        </div>
        <input
          type="text"
          placeholder="UserName"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Login</button>
        <span>
          Do you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </FormContainer>
  );
}

export default Login;
