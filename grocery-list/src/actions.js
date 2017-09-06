//action types
const ADD_ITEM = `ADD_ITEM`;
const REMOVE_ITEM = `REMOVE_ITEM`;
const PURCHASE_ITEM = `PURCHASE_ITEM`;
const SET_PURCHASED_FILTER = `SET_PURCHASED_FILTER`;
const SET_CATEGORY_FILTER = `SET_CATEGORY_FILTER`;
const SET_SORT_BY = `SET_SORT_BY`;

//actions as functions
const purchaseItem = id => {
  return {
    type: PURCHASE_ITEM,
    data: id
  };
};

//is this different from purchase?
const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    data: id
  };
};
//IIFE FTW
const addItem = (function() {
  let itemId = 1;
  return data => {
    return {
      type: ADD_ITEM,
      data: {
        ...data,
        id: itemId++
      }
    };
  };
})();
const setPurchasedFilter = filter => {
  return {
    type: SET_PURCHASED_FILTER,
    data: filter
  };
};
const setCategoryFilter = filter => {
  return {
    type: SET_CATEGORY_FILTER,
    data: filter
  };
};
const setSortBy = prop => {
  return {
    type: SET_SORT_BY,
    data: prop
  };
};
export {
  purchaseItem,
  removeItem,
  addItem,
  setPurchasedFilter,
  setCategoryFilter,
  setSortBy
};
