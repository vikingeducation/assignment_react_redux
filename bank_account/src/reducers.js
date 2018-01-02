import {combineReducers} from 'redux';
import {
  CREATE_ACCOUNT,
  CREATE_TRANSACTION,
  DEPOSIT,
  WITHDRAWL,
  TRANSFER,
  SET_DATE_FILTER,
  SET_ACCOUNT_FILTER,
  SET_ACCOUNT_SORT,
} from './actions';

const bank = (state = {accounts: [], transactions: []}, action) => {
  let accountIndex;
  let account;
  let accountIndexTransfer;
  let accountTransfer;
  let newTransaction;
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        accounts: [...state.accounts, action.data],
        transactions: [...state.transactions],
      };
    case DEPOSIT:
      accountIndex = state.accounts
        .map(account => account.id)
        .indexOf(action.data.toId);
      if (accountIndex > -1) {
        account = state.accounts.slice(0)[accountIndex];
        account.balance += action.data.amount;
        newTransaction = {
          type: action.data.type,
          toId: action.data.toId,
          fromId: null,
          amount: action.data.amount,
          date: action.data.date,
        };
        return {
          accounts: [...state.accounts],
          transactions: [...state.transactions, newTransaction],
        };
      }
      return state;
    case WITHDRAWL:
      accountIndex = state.accounts
        .map(account => account.id)
        .indexOf(action.data.fromId);
      if (accountIndex > -1) {
        account = state.accounts.slice(0)[accountIndex];
        account.balance -= action.data.amount;
        newTransaction = {
          type: action.data.type,
          toId: null,
          fromId: action.data.fromId,
          amount: action.data.amount,
          date: action.data.date,
        };
        return {
          accounts: [...state.accounts],
          transactions: [...state.transactions, newTransaction],
        };
      }
      return state;
    case TRANSFER:
      accountIndex = state.accounts
        .map(account => account.id)
        .indexOf(action.data.fromId);
      accountIndexTransfer = state.accounts
        .map(account => account.id)
        .indexOf(action.data.toId);
      if (accountIndex > -1) {
        account = state.accounts.slice(0)[accountIndex];
        accountTransfer = state.accounts.slice(0)[accountIndexTransfer];
        account.balance += action.data.amount;
        accountTransfer.balance -= action.data.amount;
        newTransaction = {
          type: action.data.type,
          toId: action.data.toId,
          fromId: action.data.fromId,
          amount: action.data.amount,
          date: action.data.date,
        };
        return {
          accounts: [...state.accounts],
          transactions: [...state.transactions, newTransaction],
        };
      }
      return state;
    default:
      return state;
  }
};
//const createTransaction = (state = [], action) => {
  //switch (action.type) {
    //case CREATE_TRANSACTION:
      //return [...state, action.data];
    //default:
      //return state;
  //}
//};

const dateFilter = (state = '', action) => {
  switch (action.type) {
    case SET_DATE_FILTER:
      return action.data;
    default:
      return state;
  }
};

const accountFilter = (state = '', action) => {
  switch (action.type) {
    case SET_ACCOUNT_FILTER:
      return action.data;
    default:
      return state;
  }
};

export const bankApp = combineReducers({
  bank,
  dateFilter,
  accountFilter,
});
