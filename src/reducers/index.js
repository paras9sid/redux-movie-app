export default function movies(state = [], action) {
  //state in store inititally empty array , and action trigger by UI
  if (action.type === "ADD_MOVIES") {
    return action.movies;
  }
  return state;
}
