import { ADD_ITEM, PURCHASE_ITEM, SET_CATEGORY_FILTER, SET_PURCHASED_FILTER, SET_ORDERBY, REMOVE_ITEM, SET_ORDER } from './actions'
import { combineReducers } from 'redux'


function groceries(state = [], action) {
  console.log(action.data)
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

// Until we figure out how to access different states from a single store,
// it is pointless to try to store available categories
// in a state, and programmatically update them as users add and remove categories.
// So instead, we use a for loop in our Filter.js for now 
// function categories(state = [], action) {
//   let newState = [...state]
//   switch (action.type) {
//     case UPDATE_CATEGORIES:
//       if (newState.indexOf(action.data) < 0 && action.data) {
//         newState.push(action.data)
//       }
//       return newState
//     case REMOVE_CATEGORY:
//       console.log('figure out how to access different state in store')
//       return newState
//     default:
//       return state
//   }
// }

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
  // this doesn't do anything
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
  purchasedFilters: purchasedFilters,
  order
})
