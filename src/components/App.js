//package imports
import React from "react";

//file imports
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavorites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    //add subscribe function to store
    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
    });
    //1.make api call
    //2.dispatch action - add movie to store
    // store.dispatch({
    //   type: "ADD_MOVIES",
    //   movies: data, // uncomment import data for now
    // });

    store.dispatch(addMovies(data)); // imported from actions-index.js
    console.log("state", this.props.store.getState());
  }

  isMovieFavorite = (movie) => {
    //it will check the state - movie is fav or not
    const { movies } = this.props.store.getState();
    const index = movies.favorites.indexOf(movie);

    if (index !== -1) {
      //WE FOUND THE MOVIE
      return true;
    }
    return false;
  };

  onChangeTab(val) {
    this.props.store.dispatch(setShowFavorites(val));
  }
  render() {
    const {movies} = this.props.store.getState();
    const { list, favorites, showFavorites } = movies;
    console.log("RENDER", this.props.store.getState());

    const displayMovies = showFavorites ? favorites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavorites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavorites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>

          <div className="list">
            {/* grab the data from data.js and map over here */}
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavorite={this.isMovieFavorite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies to display!</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
