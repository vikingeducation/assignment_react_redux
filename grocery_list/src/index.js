import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

// Import the createStore method from Redux
import { createStore } from 'redux';
import { groceryApp } from './reducers';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const groceryItems = [
  {
    id: 1,
    name: 'Pork dumplings',
    description: 'With pork, leek, and scallions',
    category: 'Frozen',
    purchased: true,
    quantity: 13
  },
  {
    id: 2,
    name: 'Kimchi dumplings',
    description: 'Overpriced Korean',
    category: 'Frozen',
    purchased: false,
    quantity: 20
  },
  {
    id: 3,
    name: 'Kale',
    description: 'So hot right now',
    category: 'Produce',
    purchased: true,
    quantity: 6
  }
]

let store = createStore(groceryApp, {
  items: groceryItems
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
