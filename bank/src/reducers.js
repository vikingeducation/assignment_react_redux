import {combineReducers} from 'redux'

import {CREATE_ACCOUNT,
        DEPOSIT_MONEY,
        WITHDRAW_MONEY,
        TRANSFER_MONEY,
        SET_FILTER_TRANSACTIONS} from './actions'

function accountOps(state=[], action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return [
        ...state,
        action.data
      ]
    case DEPOSIT_MONEY:
      console.log(state)
      return state.map((account) => {
        if (account.accountNo === action.data.accountNoTo) {
          return {
            ...account,
            balance: parseInt(account.balance, 10) + parseInt(action.data.value, 10)
          }
        }
        return account
      })
      case WITHDRAW_MONEY:
        return state.map((account) => {
          if (account.accountNo === action.data.accountNoFrom) {
            return {
              ...account,
              balance: parseInt(account.balance, 10) - parseInt(action.data.value, 10)
            }
          }
          return account
        })
        case TRANSFER_MONEY:
          return state.map((account) => {
            if (account.accountNo === action.data.accountNoFrom) {
              return {
                ...account,
                balance: parseInt(account.balance, 10) - parseInt(action.data.value, 10)
              }
            } else if (account.accountNo === action.data.accountNoTo) {
                return {
                  ...account,
                  balance: parseInt(account.balance, 10) + parseInt(action.data.value, 10)
                }
            }
            return account
          })
    default:
      return state
  }
}

function accountFilters(state='ALL_BY_ID', action) {
  switch (action.type) {
    case SET_FILTER_TRANSACTIONS:
      return action.data
    default:
      return state
  }
}


export const accountOperationsApp = combineReducers({
  accountOps,
  accountFilters
})
