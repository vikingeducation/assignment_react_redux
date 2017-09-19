import { combineReducers } from 'redux';

const initialState = {
	categoryFilter: 'All',
	purchasedFilter: 'All',
	sortType: 'Name',
	items: [],
	filteredItems: []
};

const ADD_ITEM = 'ADD_ITEM';
const PURCHASE_ITEM = 'PURCHASE_ITEM';
const SET_PURCHASED_FILTER = 'SET_PURCHASED_FILTER';
const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
const SET_SORT_TYPE = 'SET_SORT_TYPE';
const FILTER_PURCHASES = 'FILTER_PURCHASES';

function groceryApp(state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				items: [...state.items, action.data]
			};
		case PURCHASE_ITEM:
			return {
				...state,
				items: state.items.map(item => {
					if (item.id === action.data) {
						return {
							...item,
							purchased: true
						};
					}
					return item;
				})
			};
		case SET_PURCHASED_FILTER:
			return {
				...state,
				purchasedFilter: action.data
			};
		case SET_CATEGORY_FILTER:
			return {
				...state,
				categoryFilter: action.data
			};
		case SET_SORT_TYPE:
			return {
				...state,
				sortType: action.data
			};
		case FILTER_PURCHASES:
			let filteredItems;

			if (state.purchasedFilter === 'All') {
				filteredItems = [...state.items];
			} else if (state.purchasedFilter === 'Purchased') {
				filteredItems = state.items.filter(item => item.purchased === true);
			} else {
				filteredItems = state.items.filter(item => item.purchased !== true);
			}

			if (state.categoryFilter !== 'All') {
				filteredItems = filteredItems.filter(
					item => item.category === state.categoryFilter.toLowerCase()
				);
			}

			filteredItems = filteredItems.sort((a, b) => {
				if (a[state.sortType.toLowerCase()] > b[state.sortType.toLowerCase()]) {
					return 1;
				}
				if (a[state.sortType.toLowerCase()] < b[state.sortType.toLowerCase()]) {
					return -1;
				}
				return 0;
			});

			return {
				...state,
				filteredItems
			};

		default:
			return state;
	}
}

export const grocery = combineReducers({
	groceryApp
});
