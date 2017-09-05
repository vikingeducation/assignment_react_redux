import { createStore } from 'redux';
import { grocery } from './reducers';

const store = createStore(grocery);

store.subscribe(() => {
	console.log(store.getState());
});

export default store;
