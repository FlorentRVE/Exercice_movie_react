import React from "react";
import { useState, useEffect } from "react";
import * as api from "../utils/api";

const MovieDisplay = ({ searchTerms, tri }) => {
  const [data, setData] = useState([]); // Création du state data qui va accueillir nos données.
  const [genre, setGenre] = useState([]); // Création du state data qui va accueillir nos données.
  const [isLiked, setIsLiked] = useState([]);

  localStorage.setItem('searchTerms', JSON.stringify(searchTerms));

  // ========= FONCTION POUR AJOUTER DES LIKES =========
  const handleClick = (item) => {

    let like = localStorage.getItem("like");

    let currentLike = like ? JSON.parse(like) : [];

    if (!currentLike.includes(item.id)) {

      currentLike.push(item.id);
      currentLike.push(item);
      setIsLiked(currentLike);
      console.log(currentLike);

    } else {

      let index = currentLike.indexOf(item.id);
      let index2 = currentLike.indexOf(item);
      currentLike.splice(index, 1);
      currentLike.splice(index2, 1);
      setIsLiked(currentLike);
      console.log(currentLike);
      
    }

    localStorage.setItem("like", JSON.stringify(currentLike));
    console.log(isLiked);
  };

  // ===== Récupération des genres avec getGenre() =========
  useEffect(() => {
    api.getGenre().then((genre) => {
      setGenre(genre.genres); // On modifie data pour lui donner la valeur des données récupérées.
    });
  }, []);

  // ===== Récupération des données avec getData() =========
  useEffect(() => {
    api.getData(searchTerms).then((data) => {
      setData(data.results); // On modifie data pour lui donner la valeur des données récupérées.
    });
  }, [searchTerms]);

  //   ========= TRI ===========
  api.sortDataExploit(tri, data);

  // Puis on utilise .map() pour parcourir et manipuler les données.

  return (
    <div className="bg-slate-200 my-10 rounded-2xl p-4 flex flex-wrap gap-5 justify-center">
      {data.map((item) => (
        <div className="relative flex flex-col justify-center items-center bg-slate-800 text-white text-center rounded-2xl p-4 w-[352px]">
          <span className="absolute top-3 left-3 text-3xl">
            <i
              className={`fa-solid fa-heart ${
                isLiked.includes(item.id) ? "text-red-600" : "text-white"
              }`}
              onClick={() => handleClick(item)}
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
  );
};

export default MovieDisplay;
