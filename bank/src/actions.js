import { store } from './index';

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const TRANSFER = 'TRANSFER';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const SORT_BY_DATE = 'SORT_BY_DATE';

let newAccountId = 111222334;
export function createAccount(data) {
  return {
    type: CREATE_ACCOUNT,
    data: {
      ...data,
      id: newAccountId++
    }
  };
}

// Takes id (account number) and amount (in cents)
export function deposit(data) {
  return {
    type: DEPOSIT,
    data
  };
}

// Takes id (account number) and amount (in cents)
export function withdraw(data) {
  return {
    type: WITHDRAW,
    data
  };
}

// Takes from (account number), to (account number), and amount (in cents)
export function transfer(data) {
  return {
    type: TRANSFER,
    data
  };
}

export function selectAccount(id) {
  return {
    type: SELECT_ACCOUNT,
    data: {
      id,
      allAccounts: store.getState().accounts
    }
  };
}

export function sortByDate(data) {
  return {
    type: SORT_BY_DATE,
    data
  };
}
