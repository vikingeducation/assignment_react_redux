import { combineReducers } from "redux";
import {
  CREATE_ITEM,
  PURCHASE_ITEM,
  SET_CATEGORY_FILTER,
  SET_PURCHASE_FILTER
} from "./actions";

const groceryList = (state = [], action) => {
  switch (action.type) {
    case CREATE_ITEM:
      return [...state, action.data];
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item,
            desiredAmount: item.desiredAmount--,
            currentAmount: item.currentAmount++
          };
        }
        return item;
      });
    default:
      return state;
  }
};

const purchaseFilter = (state = "NOT_PURCHASED", action) => {
  switch (action.type) {
    case SET_PURCHASE_FILTER:
      return action.data;
    default:
      return state;
  }
};

const categoryFilter = (state = "all", action) => {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.data;
    default:
      return state;
  }
};

const nameSort = (state = "", action) => {
  switch (action.type) {
    case "SET_NAME_SORT":
      return action.data;
    default:
      return state;
  }
};

const descriptionSort = (state = "", action) => {
  switch (action.type) {
    case "SET_DESCRIPTION_SORT":
      return action.data;
    default:
      return state;
  }
};

export const groceryListApp = combineReducers({
  groceryList,
  purchaseFilter,
  categoryFilter,
  nameSort,
  descriptionSort
});
