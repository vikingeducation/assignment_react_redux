import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import groceryApp from "./reducers";

import App from "./components/App";
// const boot = require("bootstrap");
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker"; //?

//hydrate with some data
const initGroceries = [
  {
    id: 0,
    name: "hat",
    description: "a sweet hat",
    amount: 1,
    category: "hats",
    purchased: false
  },
  {
    id: 1,
    name: "shoe",
    description: "a brown shoe",
    amount: 7,
    category: "shoes",
    purchased: false
  },
  {
    id: 2,
    name: "Lightsaber",
    description: "a green sword of energy",
    amount: 2,
    category: "deadly weapons",
    purchased: false
  },
  {
    id: 3,
    name: "Potatoes",
    description: "any will do",
    amount: 12,
    category: "food",
    purchased: false
  }
];
const initStore = {
  groceries: initGroceries
  // filters: { purchased: "all", categories: "all" }
};
const store = createStore(groceryApp, initStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
