import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Register from "../components/Register";

const HomeScreen = () => {
  let navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo");

  useEffect(() => {
    if (userInfo) {
      navigate("/profile");
    }
  }, []);
  return (
    <>
      <Register />
    </>
  );
};

export default HomeScreen;
