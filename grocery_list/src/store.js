import { createStore } from "redux";
import { groceriesApp } from "./reducers";

const groceries = [
  {
    name: "Broccoli",
    category: "Produce",
    description: "Yuck",
    amount: 30000,
    purchased: false
  },
  {
    name: "Cheddar",
    category: "Dairy",
    description: "cheesy",
    amount: 3,
    purchased: true
  },
  {
    name: "Rice",
    category: "Bulk",
    description: "bland",
    amount: 44,
    purchased: false
  },
  {
    name: "Almonds",
    category: "Bulk",
    description: "the nuttiest",
    amount: 5555,
    purchased: true
  }
];

const store = createStore(groceriesApp, { groceries });

store.subscribe(() => {
  console.log(store.getState());
});

console.log("initial state", store.getState());

export default store;
