import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api";

const ProfileScreen = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : "";

  const fetchLoggedInUser = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`${BASE_URL}/users/getMe`, config);
      setUserData(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      navigate("/");
    }
  };

  useEffect(() => {
    fetchLoggedInUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>
          Welcome {userData.fullName}
          <button onClick={logout}>Logout</button>
        </h1>
      )}
    </>
  );
};

export default ProfileScreen;
