import React from "react";

import useGetWinesApi from "../hooks/useGetWinesApi";

const WineList = ({ history }) => {
  const [{ isError, isLoading }, wines] = useGetWinesApi(history);

  return (
    <div className="home">
      <h1>Here is your wine</h1>
      {isError ? (
        <h1>Something went wrong</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ul>
            {wines.map(wine => (
              <li key={wine.public_id}>
                {`${wine.year} ${wine.brand} ${wine.variety}`}
              </li>
            ))}
          </ul>
          <div
            onClick={() => {
              history.push("/addwine");
            }}
          >
            Add a wine
          </div>
        </>
      )}
    </div>
  );
};

export default WineList;
