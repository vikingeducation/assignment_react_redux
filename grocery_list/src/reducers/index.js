import { combineReducers } from "redux";

import {
  ACTION_ADD_ITEM,
  ACTION_ADD_CATEGORY,
  ACTION_PURCHASE_ITEM,
  SET_PURCHASED_FILTER,
  SET_CATEGORY_FILTER,
  SET_SORT_BY
} from "../actions";

/*
 * items
 * id, name, amount, category, purchased
 */

const initialState = {
  items: [],
  categories: []
};

const groceries = (groceries = [], action) => {
  switch (action.type) {
    case ACTION_ADD_ITEM:
      return [...groceries, action.data];

    case ACTION_PURCHASE_ITEM:
      const items = groceries.map(item => {
        if (item.id === action.data) {
          item.purchased = true;
        }
        return item;
      });

      return items;

    default:
      return groceries;
  }
};

export const categories = (categories = [], action) => {
  switch (action.type) {
    case ACTION_ADD_CATEGORY:
      return [...categories, action.data];
    default:
      return categories;
  }
};

export const purchasedFilter = (state = "SHOW_ALL", action) =>
  action.type === SET_PURCHASED_FILTER ? action.data : state;
export const categoryFilter = (state = "SHOW_ALL", action) =>
  action.type === SET_CATEGORY_FILTER ? action.data : state;
export const sortBy = (state = "Id", action) =>
  action.type === SET_SORT_BY ? action.data : state;

const groceriesApp = combineReducers({
  groceries,
  categories,
  purchasedFilter,
  categoryFilter,
  sortBy
});

export default groceriesApp;
