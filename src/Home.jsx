import axios from "axios";
import React, { useState } from "react";

import "./Home.css";

const callAxios = async (email, password, props) => {
  const client = axios.create({
    baseURL: "http://127.0.0.1:5000/"
  });
  const data = { email, password };
  const response = await client.post("/auth/login", data);
  const { authorization: token, userId } = response.data; // Put me in the store or context
  console.log("Home.jsx -> %ctoken:", "color: red", token, userId);
  props.history.push("/wine");
};

const Home = props => {
  const onChangeEmail = e => {
    updateEmail(e.target.value);
  };

  const onChangePassword = e => {
    updatePassword(e.target.value);
  };

  const clickButton = () => {
    callAxios(email, password, props);
  };

  const [email, updateEmail] = useState("aaa");
  const [password, updatePassword] = useState("aaa");

  return (
    <div className="Home">
      <h1>Log in</h1>
      <input
        type="text"
        placeholder="email..."
        value="aaa"
        onChange={onChangeEmail}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={onChangePassword}
        value="aaa"
      />
      <div className="button" onClick={clickButton}>
        Go
      </div>
    </div>
  );
};

export default Home;
