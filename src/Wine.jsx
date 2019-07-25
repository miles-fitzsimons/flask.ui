import axios from "axios";
import React, { useEffect } from "react";

const getWines = async () => {
  const client = axios.create({
    baseURL: "http://127.0.0.1:5000/"
  });
  const userId = "2fa12fbc-6494-4499-b374-e996cf10c059";
  const response = await client.get(`/wine/${userId}`);

  const wines = response.data.data;
  console.log("WINE", wines);
};

const Home = () => {
  useEffect(() => {
    getWines();
  });

  return <h1>Here is your wine</h1>;
};

export default Home;
