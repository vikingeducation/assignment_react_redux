export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
// export const CREATE_TRANSACTION = "CREATE_TRANSACTION";
export const DEPOSIT = "DEPOSIT";
export const WITHDRAWL = "WITHDRAWL";
export const TRANSFER = "TRANSFER";
export const SET_DATE_FILTER = "SET_DATE_FILTER";
export const SET_ACCOUNT_FILTER = "SET_ACCOUNT_FILTER";
export const SET_ACCOUNT_SORT = "SET_ACCOUNT_SORT";

let nextAccountId = 0;
export const createAccount = data => {
  return {
    type: CREATE_ACCOUNT,
    data: {
      ...data,
      id: nextAccountId++
    }
  };
};

let nextTransactionId = 0;
export const setDateFilter = data => {
  return {
    type: SET_DATE_FILTER,
    data
  };
};

export const setAccountFilter = data => {
  return {
    type: SET_ACCOUNT_FILTER,
    data
  };
};

export const deposit = (toId, amount, date) => {
  return {
    type: DEPOSIT,
    data: {
      type: "DEPOSIT",
      fromId: "ext",
      toId,
      amount,
      date,
      transactionId: nextTransactionId++
    }
  }
}

export const withdrawl = (fromId, amount, date) => {
  return {
    type: WITHDRAWL,
    data: {
      type: "WITHDRAWL",
      fromId, 
      toId: "ext",
      amount,
      date,
      transactionId: nextTransactionId++
    }
  }
}

export const transfer = (toId, fromId, amount, date) => {
  return {
    type: TRANSFER,
    data: {
      type: "TRANSFER",
      fromId, 
      toId,
      amount,
      date,
      transactionId: nextTransactionId++
    }
  }
}

