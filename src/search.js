import React from "react";
import search from "./icons/static svg/search-circle.svg";

function Search(props) {
  let { handleChange, handleSubmit, location } = props;

  return (
    <form
      action="/"
      className="col-12 mb-2 d-flex justify-content-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={location}
        onChange={(e) => handleChange(e)}
        className="col-9 p-2"
      />
      <button className="p-0 mx-1" type="submit">
        <img src={search} alt="" />
      </button>
    </form>
  );
}

export default Search;
