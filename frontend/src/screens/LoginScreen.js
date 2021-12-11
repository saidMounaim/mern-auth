import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

const LoginScreen = () => {
  let navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");

  useEffect(() => {
    if (userInfo) {
      navigate("/profile");
    }
  }, []);

  return (
    <>
      <Login />
    </>
  );
};

export default LoginScreen;
