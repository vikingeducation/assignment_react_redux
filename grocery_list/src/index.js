import React from 'react';
import { render } from 'react-dom';
// *NEW* import Provider from React Redux bindings
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { addItem, purchaseItem, addCategory } from './actions';

import groceriesApp from './reducers';

import faker from 'faker';

const store = createStore(groceriesApp);

let unsubscribe = store.subscribe(() => {
	//console.log(store.getState());
});

console.log('initial state: ', store.getState());

for (let i = 0; i < 10; i++) {
	const categories = store.getState().categories;
	const newCategory = faker.commerce.department();
	categories.some(category => {
		return category.name === newCategory;
	});
	if (!categories.some(category => category.name === newCategory)) {
		store.dispatch(
			addCategory({
				name: newCategory
			})
		);
	}
	store.dispatch(
		addItem({
			name: faker.commerce.productName(),
			desc: faker.random.words(25),
			category: newCategory,
			amount: Math.floor(1 + Math.random() * 10),
			imgSrc: 'http://via.placeholder.com/241x200',
			purchased: false
		})
	);
	const purchased = !!Math.round(Math.random());
	if (purchased) {
		store.dispatch(purchaseItem(i + 1));
	}
}

console.log('after state: ', store.getState());

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
