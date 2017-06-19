import { ADD_ITEM, PURCHASE_ITEM, SET_CATEGORY_FILTER, SET_PURCHASED_FILTER, SET_ORDERBY, UPDATE_CATEGORIES, REMOVE_ITEM, SET_ORDER } from './actions'
import { combineReducers } from 'redux'


function groceries(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.data
      ]
    case REMOVE_ITEM:
      return [...state].filter((item) => (
        item.id !== action.data
      ))
    case PURCHASE_ITEM:
      return state.map((item) => {
        if (item.id === action.data) {
          return {
            ...item,
            purchased: 'TRUE'
          }
        }
        return item
      })
    default:
      return state
  }
}

function updateCategories(state = ['ALL'], action) {
  switch (action.type) {
    case UPDATE_CATEGORIES:
      let newState = [...state]
      if (state.indexOf(action.data) < 0 && action.data) {
        newState.push(action.data)
      }
      return newState
    default:
      return state
  }
}

function purchasedFilter(state = 'ALL', action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data.toUpperCase()
    default:
      return state
  }
}

function categoryFilter(state = 'ALL', action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.data
    default:
      return state
  }
}

function orderBy(state = 'name', action) {
  switch (action.type) {
    case SET_ORDERBY:
      return action.data
    default:
      return state
  }
}

function purchasedFilters(state = [], action) {
  // this should not do anything
  return state
}

function order(state = 'ASC', action) {
  switch (action.type) {
    case SET_ORDER:
      return (state === 'DESC' ? 'ASC' : 'DESC')
    default:
      return state
  }
}

export const groceryApp = combineReducers({
  groceries,
  purchasedFilter,
  categoryFilter,
  orderBy,
  categories: updateCategories,
  purchasedFilters: purchasedFilters,
  order
})
