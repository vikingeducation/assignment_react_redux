import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();

// import { createStore } from "redux";
// import groceryApp from "./reducers";
// import {
// 	addItem,
// 	purchaseItem,
// 	setPurchasedFilter,
// 	setCategoryFilter,
// 	setSortType
// } from "./actions";

// const store = createStore(groceryApp);

// let unsubscribe = store.subscribe(() => {
// 	console.log(store.getState());
// });

// store.dispatch(purchaseItem(2));

// store.dispatch(setPurchasedFilter("PURCHASED"));

// store.dispatch(setCategoryFilter("dairy"));

// store.dispatch(setSortType("description"));

// unsubscribe();
