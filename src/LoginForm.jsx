import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import useLoginApi from "./hooks/useLoginApi";

const LoginForm = props => {
  const [email, setEmail] = useState("aaa");
  const [password, setPassword] = useState("aaa");
  const [{ isLoading, isError }, doPost] = useLoginApi(props.history);

  return (
    <>
      <h1>Log in</h1>
      <form
        className="form"
        onSubmit={e => {
          doPost({ email, password });
          e.preventDefault();
        }}
      >
        <input
          placeholder="Email address..."
          type="text"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">GO</button>
      </form>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong...</h1>}
    </>
  );
};

export default withRouter(LoginForm);
