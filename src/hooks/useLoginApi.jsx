import axios from "axios";
import { useState, useEffect, useReducer, useRef, useContext } from "react";

import dataApiReducer from "../reducers/dataApiReducer";

import UserContext from "../contexts/UserContext";

const useLoginApi = history => {
  const userContext = useContext(UserContext);

  const isFirstRender = useRef(true);
  const [data, setData] = useState({});

  const [state, dispatch] = useReducer(dataApiReducer, {
    isLoading: false,
    isError: false
  });

  useEffect(() => {
    let didCancel = false;

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
          if (!didCancel) {
            dispatch({ type: "POST_SUCCESS" });
            userContext.setToken(result.data.authorization);
            userContext.setUserId(result.data.userId);
            history.push("/winelist");
          }
        })
        .catch(() => {
          if (!didCancel) {
            dispatch({ type: "POST_FAILURE" });
          }
        });
    };

    postLogin();

    return () => {
      didCancel = true;
    };
  }, [data, history, userContext]);

  return [state, setData];
};

export default useLoginApi;
