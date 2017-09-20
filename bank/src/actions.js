export const SET_SELECTED_ACCOUNT = 'SET_SELECTED_ACCOUNT';
export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';
export const TRANSFER = 'TRANSFER';
export const SET_DATE_FILTER = 'SET_DATE_FILTER';

export function setSelectedAccount(data) {
  return {
    type: SET_SELECTED_ACCOUNT,
    data: data
  };
}

export function deposit(data) {
  return {
    type: DEPOSIT,
    data
  };
}

export function withdraw(data) {
  return {
    type: WITHDRAW,
    data
  };
}

export function transfer(data) {
  return {
    type: TRANSFER,
    data
  };
}

export function setDateFilter(data) {
  return {
    type: SET_DATE_FILTER,
    data
  };
}
