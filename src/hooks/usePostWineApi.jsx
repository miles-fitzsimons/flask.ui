import axios from "axios";
import { useContext, useState, useReducer, useEffect, useRef } from "react";

import dataApiReducer from "../reducers/dataApiReducer";

import UserContext from "../contexts/UserContext";

const usePostWineApi = history => {
  const { token, userId } = useContext(UserContext);

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

    const postWine = async () => {
      dispatch({ type: "POST_BEGIN" });

      const client = axios.create({
        baseURL: "http://127.0.0.1:5000/",
        headers: {
          Authorization: token
        }
      });

      await client
        .post("/wine/add", { ...data, user_id: userId })
        .then(() => {
          if (!didCancel) {
            dispatch({ type: "POST_SUCCESS" });
            history.push("/winelist");
          }
        })
        .catch(() => {
          if (!didCancel) {
            dispatch({ type: "POST_FAILURE" });
          }
        });
    };

    postWine();

    return () => {
      didCancel = true;
    };
  }, [data, token, history, userId]);
  return [state, setData];
};

export default usePostWineApi;
