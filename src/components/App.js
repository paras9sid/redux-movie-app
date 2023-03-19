//package imports
import React from "react";

//file imports
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavorites } from "../actions";
import { StoreContext } from "..";

class App extends React.Component {
  componentDidMount() {
    //modifying abve code as per lecture
    this.props.store.subscribe(() => this.forceUpdate());
    this.props.store.dispatch(addMovies(data));
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
    const { movies, search } = this.props.store.getState();
    const { list, favorites = [], showFavorites = [] } = movies;
    // console.log("RENDER", this.props.store.getState());

    const displayMovies = showFavorites ? favorites : list;

    return (
      <div className="App">
        <Navbar search={search} />
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
            {/* {displayMovies.map((movie, index) => (
             */}
            {displayMovies.map((movie) => (
              <MovieCard
                movie={movie}
                // key={`movies-${index}`}
                key={movie.imdbID}
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

class AppWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    );
  }
}
// export default App;
export default AppWrapper;
