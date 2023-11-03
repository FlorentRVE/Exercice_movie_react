import React from "react";
import { Link } from "react-router-dom";

const NavButton = () => {
  return (
    <div className="flex gap-3 justify-center mb-3">
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Accueil
        </button>
      </Link>

      <Link to="/like">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Coup de coeur
        </button>
      </Link>
    </div>
  );
};

export default NavButton;
