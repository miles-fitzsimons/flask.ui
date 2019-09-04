import axios from "axios";
import { useState, useEffect, useReducer, useRef, useContext } from "react";

import dataApiReducer from "../reducers/dataApiReducer";

import UserContext from "../Contexts/UserContext";

const useLoginApi = history => {
  const isFirstRender = useRef(true);
  const [data, setData] = useState({});

  const [state, dispatch] = useReducer(dataApiReducer, {
    isLoading: false,
    isError: false
  });

  const userContext = useContext(UserContext);

  useEffect(() => {
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
      return;
    }

    const postLogin = async () => {
      dispatch({ type: "POST_BEGIN" });

      const client = axios.create({
        baseURL: "http://127.0.0.1:5000/"
      });

      await client
        .post("/auth/login", data)
        .then(result => {
          dispatch({ type: "POST_SUCCESS" });
          userContext.setToken(result.data.authorization);
          userContext.setUserId(result.data.userId);
          history.push("/winelist");
        })
        .catch(() => {
          dispatch({ type: "POST_FAILURE" });
        });
    };

    postLogin();
  }, [data]);

  return [state, setData];
};

export default useLoginApi;
