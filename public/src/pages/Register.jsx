import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { registerRoute } from "../utils/APIRoutes";
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

function Register() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { password, username, email } = value;
      const { data } = await instance.post(registerRoute, {
        username,
        email,
        password,
      });
      if (data?.result === false) {
        toast.warning(data?.error?.[0]?.msg);
      }
      if (data?.result === true) {
        toast.success(data?.data?.msg);
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      }
    }
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = value;
    if (password !== confirmPassword) {
      toast.error("Password and comfirm password show be same!");
      return false;
    } else if (username.length < 3) {
      toast.error("UserName have to greater than 3 character!");
      return false;
    } else if (password.length < 8) {
      toast.error("Password have to greater than 8 character!");
      return false;
    } else if (email === "") {
      toast.error("Email is required");
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
          <h1>Chap App</h1>
        </div>
        <input
          type="text"
          placeholder="UserName"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Create User</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </FormContainer>
  );
}

export default Register;
