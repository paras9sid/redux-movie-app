// {
//   type: "ADD_MOVIES",
//   movies: [m1,m2,m3],
// }
// {
//   // type: "DECREASE_COUNT";
// }

//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_SHOW_FAVORITES = "SET_SHOW_FAVORITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

//action creators
export function addMovies(movies) {
  return {
    type: "ADD_MOVIES",
    movies,
  };
}

export function addFavorite(movie) {
  return {
    type: ADD_TO_FAVORITES,
    movie,
  };
}

export function removeFromFavorites(movie) {
  return {
    type: REMOVE_FROM_FAVORITES,
    movie,
  };
}
export function setShowFavorites(val) {
  return {
    type: SET_SHOW_FAVORITES,
    val,
  };
}
export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleSearchMovie(movie) {
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=d9680e36&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json()) // we want json responnse
      .then((movie) => {
        console.log("movie", movie);

        //dispatch an action
      });
  };
}
