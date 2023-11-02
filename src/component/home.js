import React, { useState } from "react";
import MovieDisplay from "./moviedisplay";
import Header from "./header";
import SearchBar from "./searchbar";
import TriButton from "./tributton";

const Home = () => {
  // ========= STATE ===========
  const [searchTerms, setSearchTerms] = useState("");
  const [tri, setTri] = useState();

  return (
    <div className="bg-slate-200">

      <Header />

      <SearchBar setSearchTerms={setSearchTerms}/>

      <TriButton setTri={setTri} />

      <MovieDisplay searchTerms={searchTerms} tri={tri}/>

    </div>
  );
}

export default Home