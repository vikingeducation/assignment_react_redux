const VIEW_ACCOUNT = "VIEW_ACCOUNT";
const DEPOSIT_MONEY = "DEPOSIT_MONEY";
const WITHDRAW_MONEY = "WITHDRAW_MONEY";
const TRANSFER_MONEY = "TRANSFER_MONEY";
const TRANSACTION_FILTER = "TRANSACTION_FILTER";

export function viewAccount(id) {
  return {
    type: VIEW_ACCOUNT,
    data: {
      id
    }
  };
}

export function depositMoney(id, amount) {
  return {
    type: DEPOSIT_MONEY,
    data: {
      id,
      amount
    }
  };
}

export function withdrawMoney(id, amount) {
  return {
    type: WITHDRAW_MONEY,
    data: {
      id,
      amount
    }
  };
}

export function transferMoney(id, id1, amount) {
  return {
    type: TRANSFER_MONEY,
    data: {
      id,
      id1,
      amount
    }
  };
}

export function transactionFilter(startDate, endDate, id) {
  return {
    type: TRANSACTION_FILTER,
    data: {
      startDate,
      endDate,
      id
    }
  };
}

export {
  VIEW_ACCOUNT,
  DEPOSIT_MONEY,
  WITHDRAW_MONEY,
  TRANSFER_MONEY,
  TRANSACTION_FILTER
};
