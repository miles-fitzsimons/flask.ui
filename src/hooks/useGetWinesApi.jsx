import axios from "axios";
import { useState, useEffect, useReducer, useContext } from "react";

import wineApiReducer from "../reducers/wineApiReducer";

import UserContext from "../Contexts/UserContext";

const useGetWinesApi = history => {
  const [wines, setWines] = useState([]);
  const [state, dispatch] = useReducer(wineApiReducer, {
    isLoading: false,
    isError: false
  });

  const userContext = useContext(UserContext);

  useEffect(() => {
    const getWines = async () => {
      dispatch({ type: "GET_BEGIN" });
      const client = axios.create({
        baseURL: "http://127.0.0.1:5000/",
        headers: {
          Authorization: userContext.token
        }
      });

      await client
        .get(`/wine/${userContext.userId}`)
        .then(result => {
          console.log("res", result);
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
  }, []);

  return [state, wines];
};

export default useGetWinesApi;
