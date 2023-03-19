//package imports
import React, { createContext } from "react";
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

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("store", store); // will show the properties of store in object form when clicked in console

export const StoreContext = createContext();
console.log("store context", StoreContext);

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export function connect(callback) {
  return function (Component) {
    class ConnectedComponenet extends React.Component {
      constructor(props) {
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const { store } = this.props;
        const state = store.getState();
        const dataToBePassedAsProps = callback(state);

        return (
          <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
        );
      }
    }
    class connectedComponenetWrapper extends React.Component {
      render() {
        return (
          <StoreContext.Consumer>
            {(store) => <ConnectedComponenet store={store} />}
          </StoreContext.Consumer>
        );
      }
    }

    return connectedComponenetWrapper;
  };
}

// create context

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
