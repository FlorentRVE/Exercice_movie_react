import React from "react";
import NavButton from "./navigationbutton";

const Header = () => {
    
    return (
      <div className="bg-slate-200">
        <h1 className="text-center text-5xl font-bold mb-5 text-slate-800 uppercase">
          React Movie Exercice
        </h1>

        < NavButton />
      </div>
    );
}

export default Header