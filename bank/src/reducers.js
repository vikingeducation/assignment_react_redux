import { combineReducers } from "redux";
import {
  SET_SELECTED_ACCOUNT,
  DEPOSIT,
  WITHDRAW,
  TRANSFER,
  SET_DATE_FILTER
} from "./actions";

//Filter reducer
function dateFilter(state = { startDate: 0, endDate: Date.now() }, action) {
  switch (action.type) {
    case SET_DATE_FILTER:
      return action.data;
    default:
      return state;
  }
}

//Account reducer
function accountState(state = {}, action) {
  let updatedAccount;
  let newTransaction;
  let newAccounts;

  switch (action.type) {
    case SET_SELECTED_ACCOUNT:
      console.log("Reducer");
      console.log(state);
      const selectedAccount = state.accounts.find(
        account => account.id === Number(action.data)
      );
      console.log(selectedAccount);
      return {
        ...state,
        selectedAccount
      };

    case DEPOSIT:
      let amount = Number(action.data.amount);
      newTransaction = {
        type: "deposit",
        amount,
        origin: null,
        destination: state.selectedAccount.id,
        date: action.data.date
      };
      newAccounts = state.accounts.map(account => {
        if (account.id === state.selectedAccount.id) {
          updatedAccount = {
            ...account,
            balance: account.balance + amount
          };
          return updatedAccount;
        }
        return account;
      });
      return {
        ...state,
        accounts: newAccounts,
        selectedAccount: updatedAccount,
        transactions: [...state.transactions, newTransaction]
      };

    case WITHDRAW:
      if (state.selectedAccount.balance < action.data.amount) {
        return state;
      }

      newTransaction = {
        type: "withdraw",
        amount: action.data.amount,
        origin: state.selectedAccount.id,
        destination: null,
        date: action.data.date
      };

      newAccounts = state.accounts.map(account => {
        if (account.id === state.selectedAccount.id) {
          updatedAccount = {
            ...account,
            balance: account.balance - action.data.amount
          };
          return updatedAccount;
        }
        return account;
      });
      return {
        ...state,
        accounts: newAccounts,
        selectedAccount: updatedAccount,
        transactions: [...state.transactions, newTransaction]
      };

    case TRANSFER:
      let origin = state.accounts.find(account => {
        return account.id === action.data.origin;
      });
      if (origin.balance < action.data.amount) {
        return state;
      }

      newTransaction = {
        type: "transfer",
        amount: action.data.amount,
        origin: action.data.origin,
        destination: action.data.destination,
        date: action.data.date
      };

      newAccounts = state.accounts.map(account => {
        if (account.id === action.data.origin) {
          updatedAccount = {
            ...account,
            balance: account.balance - action.data.amount
          };
          return updatedAccount;
        } else if (account.id === action.data.destination) {
          updatedAccount = {
            ...account,
            balance: account.balance + action.data.amount
          };
          return updatedAccount;
        } else {
          return account;
        }
      });
      return {
        ...state,
        accounts: newAccounts,
        transactions: [...state.transactions, newTransaction]
      };
    default:
      return state;
  }
}

export const bankApp = combineReducers({
  accountState,
  dateFilter
});
