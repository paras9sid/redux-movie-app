//package imports
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//file imports
import App from "./components/App";
import "./index.css";
import rootReducer from "./reducers";

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       console.log("ACTION TYPE = ", action.type);
//       next(action);
//     };
//   };
// };

//above function can be written as -> with help of arrow functions - curried function logger
const logger =
  ({ dispatch, setState }) =>
  (next) =>
  (action) => {
      if (typeof action !== "function") {
         console.log("ACTION TYPE = ", action.type);
      }
    next(action);
  };

// const thunk =
//   ({ dispatch, setState }) =>
//   (next) =>
//   (action) => {
//     //      console.log("ACTION TYPE = ", action.type);
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("store", store); // will show the properties of store in object form when clicked in console

ReactDOM.render(<App store={store} />, document.getElementById("root"));
