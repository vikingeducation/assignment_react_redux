import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { groceryItemsApp } from './reducers';

// Mocked server/API response
const itemsFromServer = [
  {
    id: 1,
    name: 'Peas',
    description: "For tuna fish caserole",
    amount: '$3.99',
    category: 'Frozen Section',
    purchased: false
  }, {
    id: 2,
    name: 'Chicken',
    description: "Dinner for Thursday",
    amount: '$7.99',
    category: 'Poultry',
    purchased: false
  }, {
    id: 3,
    name: 'Turkey',
    description: "Thanksgiving is coming!",
    amount: '$24.99',
    category: 'Poultry',
    purchased: false
  }
];

const store = createStore(groceryItemsApp, {
  items: itemsFromServer
});

console.log('initial state', store.getState());

store.subscribe(() => {
  console.log('current state', store.getState());
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
