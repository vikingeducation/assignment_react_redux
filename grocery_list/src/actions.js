export const ADD_ITEM = 'ADD_ITEM'
export const PURCHASE_ITEM = 'PURCHASE_ITEM'
export const SET_PURCHASED_FILTER = 'SET_PURCHASED_FILTER'
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'
export const SET_ORDER = 'SET_ORDER'
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'
export const REMOVE_ITEM = 'REMOVE_ITEM'


let id = 4;
export function addItem(data) {
  return {
    type: ADD_ITEM,
    data: {
      ...data,
      id: id++
    }
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    data: id
  }
}

export function purchaseItem(id) {
  return {
    type: PURCHASE_ITEM,
    data: id
  }
}

export function setPurchasedFilter(filter) {
  return {
    type: SET_PURCHASED_FILTER,
    data: filter
  }
}

export function setCategoryFilter(filter) {
  return {
    type: SET_CATEGORY_FILTER,
    data: filter
  }
}

export function updateCategories(category) {
  return {
    type: UPDATE_CATEGORIES,
    data: category
  }
}

export function setSortOrder(order) {
  return {
    type: SET_ORDER,
    data: order
  }
}
