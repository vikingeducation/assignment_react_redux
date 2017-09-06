import { createStore } from "redux";
import { groceriesApp } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const groceries = [
  {
    name: "Broccoli",
    category: "Produce",
    description: "Yuck",
    amount: 30000,
    purchased: false,
    id: 1
  },
  {
    name: "Cheddar",
    category: "Dairy",
    description: "cheesy",
    amount: 3,
    purchased: true,
    id: 2
  },
  {
    name: "Rice",
    category: "Bulk",
    description: "bland",
    amount: 44,
    purchased: false,
    id: 3
  },
  {
    name: "Almonds",
    category: "Bulk",
    description: "the nuttiest",
    amount: 5555,
    purchased: true,
    id: 4
  }
];

const store = createStore(groceriesApp, { groceries }, composeWithDevTools());

store.subscribe(() => {
  console.log(store.getState());
});

console.log("initial state", store.getState());

export default store;
