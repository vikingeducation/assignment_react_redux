import { combineReducers } from "redux";

//action types
const ADD_ITEM = `ADD_ITEM`;
const REMOVE_ITEM = `REMOVE_ITEM`;
const PURCHASE_ITEM = `PURCHASE_ITEM`;
const SET_PURCHASED_FILTER = `SET_PURCHASED_FILTER`;
const SET_CATEGORY_FILTER = `SET_CATEGORY_FILTER`;
const SET_SORT_BY = `SET_SORT_BY`;

function groceries(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.data];
    case REMOVE_ITEM:
      return state.filter(item => Number(action.data) !== Number(item.id));
    case PURCHASE_ITEM:
      return state.map(item => {
        if (Number(item.id) === Number(action.data)) {
          return {
            ...item,
            purchased: true
          };
        }
        return item;
      });
    default:
      return state;
  }
}

function purchasedFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data;
    default:
      return state;
  }
}

function categoryFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.data;
    default:
      return state;
  }
}

function sortBy(state = "Id", action) {
  switch (action.type) {
    case SET_SORT_BY:
      return action.data;
    default:
      return state;
  }
}

const groceryApp = combineReducers({
  groceries,
  purchasedFilter,
  categoryFilter,
  sortBy
});

export default groceryApp;
