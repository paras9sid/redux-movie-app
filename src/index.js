//package imports
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

//file imports
import App from "./components/App";
import "./index.css";
import movies from "./reducers";

const store = createStore(movies);
console.log("store", store); // will show the properties of store in object form when clicked in console
console.log("STATE", store.getState()); // empty array State as defined inr educer will reflect

ReactDOM.render(<App />, document.getElementById("root"));
