import { ADD_FAVORITE, ADD_MOVIES } from "../actions";
const initialMoviesState = {
  list: [],
  favorites: [],
};
export default function movies(state = initialMoviesState, action) {
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
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
      };
    default:
      return state;
  }
}
