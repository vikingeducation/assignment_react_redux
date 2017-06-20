import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { groceryApp } from './reducers';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let items = [{
  name: 'Grapes',
  description: 'Green?',
  quantity: 3,
  category: 'Fruit',
  purchased: "FALSE",
  id: 1
}, {
  name: 'Biscuits',
  description: 'Only if on sale',
  quantity: 3,
  category: 'Snacks',
  purchased: "FALSE",
  id: 2
}, {
  name: 'Tea',
  description: 'Only if on sale',
  quantity: 1,
  category: 'Drinks',
  purchased: 'TRUE',
  id: 3
}]


let store = createStore(
  groceryApp, {
    groceries: items,
    // categories: [{ ALL: 'All Categories' }, { Fruit: 'Fruit' }],
    purchasedFilters: [{ ALL: 'All' }, { TRUE: 'Purchased' }, { FALSE: 'Unpurchased' }],
    orderBy: 'name',
    order: 'ASC'
  })


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

);
