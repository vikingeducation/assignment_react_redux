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

// import { purchaseItem } from "./actions";

const initGroceries = [
  {
    name: "hat",
    description: "a sweet hat",
    amount: 1,
    category: "hats",
    purchased: false
  },
  {
    name: "shoe",
    description: "a brown shoe",
    amount: 7,
    category: "shoes",
    purchased: false
  }
];

const store = createStore(groceryApp, { groceries: initGroceries });
//
// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
//
// store.dispatch(
//   addItem({
//     name: "hat",
//     description: "a sweet hat",
//     amount: 1,
//     category: "hats",
//     purchased: false
//   })
// );

// store.dispatch(
//   addItem({
//     name: "shoe",
//     description: "a brown shoe",
//     amount: 7,
//     category: "shoes",
//     purchased: false
//   })
// );
//
// store.dispatch(purchaseItem(2));
//
// store.dispatch(removeItem(1));
//
// store.dispatch(setPurchasedFilter("PURCHASED_BY_KIT"));
//
// store.dispatch(setCategoryFilter("SQUIDS_IN_POLYETHYLENE_BAGS"));
//
// store.dispatch(setSortBy("Name"));
//
// store.dispatch(setSortBy("Description"));
//
// unsubscribe();

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
