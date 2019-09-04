import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import usePostWineApi from "../hooks/usePostWineApi";

const AddWine = ({ history }) => {
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [variety, setVariety] = useState("");
  const [{ isLoading, isError }, doPost] = usePostWineApi(history);

  return (
    <div className="home">
      <h1>Add a wine to your cellar</h1>
      <form
        className="form"
        onSubmit={e => {
          doPost({ year, brand, variety });
          e.preventDefault();
        }}
      >
        <input
          type="number"
          placeholder="Year..."
          onChange={e => setYear(e.target.value)}
          value={year}
        />
        <input
          type="text"
          placeholder="Brand..."
          onChange={e => setBrand(e.target.value)}
          value={brand}
        />
        <input
          type="text"
          placeholder="Variety..."
          onChange={e => setVariety(e.target.value)}
          value={variety}
        />
        <button type="submit">GO</button>
      </form>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Something went wrong</h1>}
    </div>
  );
};

export default withRouter(AddWine);
