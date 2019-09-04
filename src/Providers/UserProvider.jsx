import React, { useState } from "react";

import UserContext from "../contexts/UserContext";

const UserProvider = props => {
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ token, userId, setUserId, setToken }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
