import React from 'react';
import { render } from 'react-dom';
// *NEW* import Provider from React Redux bindings
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addItem, purchaseItem } from './actions';

import groceryListApp from './reducers';

import faker from 'faker';

const store = createStore(groceryListApp);

let unsubscribe = store.subscribe(() => {
	//console.log(store.getState());
});

console.log('initial state: ', store.getState());

for (let i = 0; i < 1000; i++) {
	store.dispatch(
		addItem({
			name: faker.commerce.productName(),
			desc: faker.random.words(25),
			category: faker.commerce.department(),
			amount: Math.floor(1 + Math.random() * 10)
		})
	);
	const purchased = !!Math.round(Math.random());
	if (purchased) {
		store.dispatch(purchaseItem(i + 1));
	}
}

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
