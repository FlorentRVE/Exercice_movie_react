import React from "react";
import { useState, useEffect } from "react";
import * as api from "../utils/api";
import Header from "./header";

const Like = () => {
  const [genre, setGenre] = useState([]); // Création de state qui va accueillir nos données.
  const [isLiked, setIsLiked] = useState([]);
  
  // ========= FONCTION POUR SUPPRIMER DES LIKES =========
  const handleClick = (item) => {
    let like = localStorage.getItem("like");
    let currentLike = like ? JSON.parse(like) : [];
    
  
      let index = currentLike.indexOf(item.id);
      let index2 = currentLike.indexOf(item);
      currentLike.splice(index, 1);
      currentLike.splice(index2, 1);
      setIsLiked(currentLike);
      console.log(currentLike);
    

    localStorage.setItem("like", JSON.stringify(currentLike));
    console.log(isLiked);
  };

  // ===== Récupération des genres avec getGenre() =========
  useEffect(() => {
    api.getGenre().then((genre) => {
      setGenre(genre.genres); // On modifie data pour lui donner la valeur des données récupérées.
    });
  }, []);

  // ===== Récupération des données du local storage =========
  let data = JSON.parse(localStorage.getItem("like"));
  console.log(data);

  let data2 = data.filter(obj => obj.id > 2);



  // Puis on utilise .map() pour parcourir et manipuler les données.

  return (
    <div>
      <Header />
      <div className="bg-slate-200 my-10 rounded-2xl p-4 flex flex-wrap gap-5 justify-center">
        {data2.map((item) => (
          <div className="relative flex flex-col justify-center items-center bg-slate-800 text-white text-center rounded-2xl p-4 w-[352px]">
            <span className="absolute top-3 left-3 text-3xl">
              <i
                className={`fa-solid fa-heart ${
                  isLiked.includes(item.id) ? "text-red-600" : "text-white"
                }`}
                onClick={() => handleClick(item.id)}
              ></i>
            </span>
            <img
              src={`https://image.tmdb.org/t/p/w300//${item.poster_path}`}
              alt=""
              className="h-[213px] w-[320px]"
            ></img>
            <h1 className="font-bold text-2xl">{item.title}</h1>
            <p className="font-bold text-2xl">{item.release_date}</p>
            <p className="font-bold text-2xl">{item.vote_average}</p>
            <div className="flex flex-wrap justify-center items-center gap-1">
              {genre.map((genre) =>
                // eslint-disable-next-line array-callback-return
                item.genre_ids.map((id) => {
                  if (genre.id === id) {
                    return (
                      <span className="font-bold text-xl text-green-600">
                        {genre.name}
                      </span>
                    );
                  }
                })
              )}
            </div>
            <p className="font-bold text-yellow-600">{item.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
