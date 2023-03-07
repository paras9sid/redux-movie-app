//package imports
import React from "react";

//file imports
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

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
  render() {
    const movies = this.props.store.getState();
    console.log("RENDER");
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>

          <div className="list">
            {/* grab the data from data.js and map over here */}
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
