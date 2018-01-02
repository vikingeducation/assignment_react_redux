import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { groceryListApp } from "./reducers.js";
import { Provider } from "react-redux";
import {
  createItem,
  purchaseItem,
  setPurchaseFilter,
  setCategoryFilter,
  setNameSort,
  setDescriptionSort
} from "./actions.js";

let store = createStore(groceryListApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(
  createItem({
    name: "soggy flakes",
    description: "a decidedly inferior option to nutty nuggets",
    desiredAmount: 1,
    currentAmount: 0,
    category: "cereal"
  })
);
store.dispatch(
  createItem({
    name: "nutty nuggets",
    description: "an amazing brand of the best cereal",
    desiredAmount: 10,
    currentAmount: 0,
    category: "cereal"
  })
);

//store.dispatch(setPurchaseFilter("PURCHASED"));
// store.dispatch(setCategoryFilter("cereal"));
//store.dispatch(setNameSort("something"));
//store.dispatch(setDescriptionSort("crackers"));

//unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
