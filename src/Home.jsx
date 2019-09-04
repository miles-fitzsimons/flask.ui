import React, { useState } from "react";

import LoginForm from "./LoginForm";

import "./Home.css";

const Home = props => {
  const [isDisplayingLoginForm, setIsDisplayingLoginForm] = useState(true);

  return (
    <div className="home">
      {isDisplayingLoginForm ? <LoginForm /> : "signup"}
      <div
        onClick={() => {
          setIsDisplayingLoginForm(!isDisplayingLoginForm);
        }}
      >{`or ${isDisplayingLoginForm ? "sign up" : "log in"}`}</div>
    </div>
  );
};

export default Home;
