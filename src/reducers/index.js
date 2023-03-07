import { ADD_MOVIES } from "../actions";

export default function movies(state = [], action) {
  // any change in state wheter state = [], or {} or "someString" or 1 will show in colse via indexjs root
  //state in store inititally empty array , and action trigger by UI
  if (action.type === ADD_MOVIES) {
    return action.movies;
  }
  return state;
}

