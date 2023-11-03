import React from "react";
import { useState } from "react";

const SearchBar = ({ setSearchTerms }) => {

  const [searchValue, setSearchValue] = useState("");

  function getsearch(e) {
    e.preventDefault();
    setSearchTerms(searchValue);
    localStorage.setItem("searchTerms", JSON.stringify(searchValue));
    
  }

  return (
    <div>
      <form className="flex flex-col mb-4" onSubmit={getsearch}>
        <input
          id="inputText"
          type="text"
          className="p-2 rounded-lg w-full mb-2"
          placeholder="Rechercher un film ..."
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
