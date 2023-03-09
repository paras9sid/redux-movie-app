import { combineReducers } from "redux";

import {
  ADD_MOVIES,
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
  console.log('MOVIES REDUCER');
  // any change in state wheter state = [], or {} or "someString" or 1 will show in colse via indexjs root
  //state in store inititally empty array , and action trigger by UI
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  // //   };
  // }
  // return state;

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
};
export function search(state = initialSearchState, action) {
  console.log('SEARCH REDUCER');
  return state;
}

//main rootReducrer - for combining reducers and calling in createStore

// const initialRootState = {
//   movies: initialMoviesState,
//   search: initialSearchState,
// };
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search
});

