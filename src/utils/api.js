// ============================ Fonction ========================

// ============ API ==========
const API_BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key=26a145d058cf4d1b17cbf084ddebedec&language=fr-FR&query=";
const API_GENRE_URL ="https://api.themoviedb.org/3/genre/movie/list?api_key=26a145d058cf4d1b17cbf084ddebedec&language=fr-FR";
// const API_ID_URL ="https://api.themoviedb.org/3/movie/"; 


// Récupérer les films selon recherche
export const getData = async (searchTerms) => {
  return await fetch(API_BASE_URL + searchTerms).then((response) => response.json());
};

// Récupérer tous les genre
export const getGenre = async () => {
  return await fetch(API_GENRE_URL).then((response) => response.json());
};

// Récupérer films by id
// export const getDataById = async (id) => {
//   return await fetch(
//     API_ID_URL +id + "?api_key=26a145d058cf4d1b17cbf084ddebedec&language=fr-FR"
//   ).then((response) => response.json());
// };

// ============= TRI ===============
export function sortDataExploit(tri, data) {
  if (tri === "flop") {
    data.sort((a, b) => a.vote_average - b.vote_average);
  } else if (tri === "top") {
    data.sort((a, b) => b.vote_average - a.vote_average);
  }
}


