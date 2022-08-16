import React from "react";
import { useGlobalContext } from "./context";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <Zoom top duration={1000}>
        <h2>📺 ZTEC NEWS</h2>
      </Zoom>
      <Bounce top duration={1000}>
        <input
          type="text"
          className="form-input"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Bounce>
    </form>
  );
};

export default SearchForm;
