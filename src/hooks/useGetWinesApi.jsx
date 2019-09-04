import axios from "axios";
import { useState, useEffect, useReducer, useContext } from "react";

import wineApiReducer from "../reducers/wineApiReducer";

import UserContext from "../contexts/UserContext";

const useGetWinesApi = history => {
  const userContext = useContext(UserContext);
  const { token, userId } = userContext;

  const [wines, setWines] = useState([]);
  const [state, dispatch] = useReducer(wineApiReducer, {
    isLoading: false,
    isError: false
  });

  useEffect(() => {
    const getWines = async () => {
      dispatch({ type: "GET_BEGIN" });
      const client = axios.create({
        baseURL: "http://127.0.0.1:5000/",
        headers: {
          Authorization: token
        }
      });

      await client
        .get(`/wine/${userId}`)
        .then(result => {
          dispatch({ type: "GET_SUCCESS" });
          setWines(result.data.data);
          // WINE CONTEXT?
        })
        .catch(() => {
          dispatch({ type: "GET_FAILURE" });
          history.push("/notfound");
        });
    };

    getWines();
  }, [token, userId, history]);

  return [state, wines];
};

export default useGetWinesApi;
