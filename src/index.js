//package imports
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

//file imports
import App from "./components/App";
import "./index.css";
// import movies from "./reducers";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
console.log("store", store); // will show the properties of store in object form when clicked in console
// console.log("BEFORE-STATE", store.getState()); // empty array State as defined inr educer will reflect

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Superman" }],
// });

// console.log("AFTER STATE", store.getState());

ReactDOM.render(<App store={store} />, document.getElementById("root"));
