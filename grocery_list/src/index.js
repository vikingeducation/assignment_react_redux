import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { groceryApp } from './reducers';
// import { addItem, purchaseItem, setCategoryFilter, setPurchasedFilter } from './actions';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

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
  }

]


let store = createStore(
    groceryApp, {
      groceries: items,
      // categories: ['All'],
      categories: [{ ALL: 'All Categories' }, { Fruit: 'Fruit' }],
      purchasedFilters: [{ ALL: 'All' }, { TRUE: 'Purchased' }, { FALSE: 'Unpurchased' }]
        // purchasedFilters: ['All', 'Purchased', 'Unpurchased']
    })
  // let unsubscribe = store.subscribe(() => {
  //   console.log(store.getState())
  // })

// store.dispatch(addItem({
//   name: 'Grapes',
//   description: 'Green?',
//   amount: 3,
//   category: 'Fruit'
// }))

// store.dispatch(addItem({
//   name: 'Milk',
//   description: 'Regular',
//   amount: 1,
//   category: 'Dairy'
// }))

// store.dispatch(purchaseItem('Grapes'))

// store.dispatch(setPurchasedFilter('Purchased'))

// store.dispatch(setCategoryFilter('NAME'))

// unsubscribe()


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

);
// registerServiceWorker();
