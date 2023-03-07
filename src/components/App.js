import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

function App() {
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
          {data.map((movie,index) => (
            <MovieCard movie={movie} key={`movies-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
