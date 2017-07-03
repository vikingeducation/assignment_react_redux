import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import "./index.css";

import faker from "faker";
import { createStore } from "redux";
import { groceryListApp } from "./reducers";

// First, create mock grocery-products list
// pass it in to app
let productsFromServer = [];

for (let i = 0; i < 50; i++) {
  productsFromServer.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(2),
    amount: faker.random.number({ min: 1, max: 8 }),
    category: faker.commerce.department(),
    image: faker.image.image(),
    purchased: false
  });
}

let categoriesSet = new Set();
productsFromServer.forEach(product => {
  categoriesSet.add(product.category);
});

let categories = Array.from(categoriesSet);

let store = createStore(
  groceryListApp,
  {
    groceryList: productsFromServer
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App categories={categories} />
  </Provider>,
  document.getElementById("root")
);
