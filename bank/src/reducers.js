import {combineReducers} from 'redux';
import {
  SELECT_ACCOUNT,
  DEPOSIT_MONEY,
  WITHDRAW_MONEY, 
  TRANSFER_MONEY,
  SET_TRANSACTION_FILTER,
  UPDATE_BALANCE
} from './actions';

function transactions(state = [], action) {
  switch(action.type) {
    case DEPOSIT_MONEY:
      return [
        ...state,
        action.data
      ];
    case WITHDRAW_MONEY:
      return [
        ...state,
        action.data
      ];
    case TRANSFER_MONEY:
      return [
        ...state,
        action.data
      ];
    default:
      return state;
  }
};

let defaultTransactionsFilter = {
  start: 1420074000000,
  end: 1514768400000
};

function transactionsFilter(state = defaultTransactionsFilter, action) {
  switch(action.type) {
    case SET_TRANSACTION_FILTER:
      return action.data;
    default:
      return state;
  }
};

function selectedAccount(state = 1, action) {
  switch(action.type) {
    case SELECT_ACCOUNT:
      return action.data;
    default:
      return state;
  }
};



function accounts(state = [], action) {
  switch(action.type) {
    case UPDATE_BALANCE:
      return state.map(account => {
        if (account.id === action.data.id) {
          return action.data;
        }
        return account;
      });
    default:
      return state;
  }
}

export const bankApp = combineReducers({
  transactions,
  transactionsFilter,
  selectedAccount,
  accounts
});