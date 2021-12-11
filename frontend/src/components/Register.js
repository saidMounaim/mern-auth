import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api";

const Register = () => {
  let navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let headers = { "content-type": "application/json" };
      const { data } = await axios.post(`${BASE_URL}/users`, userData, {
        headers,
      });
      localStorage.setItem("token", data.data.token);
      navigate("/profile");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="fullName"
            onChange={handleChange}
            placeholder="Full Name"
          />
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email address"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit">create</button>
          <p className="message">
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
