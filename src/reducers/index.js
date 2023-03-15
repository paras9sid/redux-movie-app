import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_MOVIE_TO_LIST,
  ADD_SEARCH_RESULT,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_SHOW_FAVORITES,
} from "../actions";
const initialMoviesState = {
  list: [],
  favorites: [],
  showFavorites: false,
};

//movie reducer
export function movies(state = initialMoviesState, action) {
  console.log("MOVIES REDUCER");

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
      };
    case SET_SHOW_FAVORITES:
      return {
        ...state,
        showFavorites: action.val,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    case REMOVE_FROM_FAVORITES:
      const filteredArray = state.favorites.filter(
        (movie) => movie.Title !== action.movie.Title
      );

      return {
        ...state,
        favorites: filteredArray,
      };

    default:
      return state;
  }
}

// creating search reducer

const initialSearchState = {
  result: {},
  showSearchResults: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}

export default combineReducers({
  movies,
  search,
});
