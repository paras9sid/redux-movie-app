//package imports
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";

//file imports
import App from "./components/App";
import "./index.css";
import rootReducer from "./reducers";

const logger = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      console.log("ACTION TYPE = ", action.type);
      next(action);
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("store", store); // will show the properties of store in object form when clicked in console

ReactDOM.render(<App store={store} />, document.getElementById("root"));
