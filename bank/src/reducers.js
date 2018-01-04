import {
  VIEW_ACCOUNT,
  DEPOSIT_MONEY,
  WITHDRAW_MONEY,
  TRANSFER_MONEY,
  TRANSACTION_FILTER
} from "./actions";

const initialState = {
  accounts: [
    {
      id: 1,
      balance: 10,
      transactions: [
        { type: "Deposit", amount: 324243, date: "2018-01-04T14:38:12.476Z" }
      ]
    },
    { id: 2, balance: 1000, transactions: [] },
    { id: 3, balance: 920022, transactions: [] }
  ],
  display: []
};

function cash(state = initialState, action) {
  switch (action.type) {
    case VIEW_ACCOUNT:
      return {
        ...state,
        display: state.accounts.map(account => {
          if (account.id === action.data.id) {
            return account;
          }
        })
      };
    case DEPOSIT_MONEY:
      return {
        ...state,
        accounts: state.accounts.map(account => {
          if (account.id === action.data.id) {
            return {
              ...account,
              balance: account.balance + action.data.amount,
              transactions: [
                ...account.transactions,
                {
                  type: "Deposit",
                  amount: action.data.amount,
                  date: new Date()
                }
              ]
            };
          } else {
            return account;
          }
        })
      };
    case WITHDRAW_MONEY:
      return {
        ...state,
        accounts: state.accounts.map(account => {
          if (account.id === action.data.id) {
            return {
              ...account,
              balance: account.balance - action.data.amount,
              transactions: [
                ...account.transactions,
                {
                  type: "Withdrawal",
                  amount: action.data.amount,
                  date: new Date()
                }
              ]
            };
          } else {
            return account;
          }
        })
      };
    case TRANSFER_MONEY:
      return {
        accounts: state.accounts.map(account => {
          if (account.id === action.data.id) {
            return {
              ...account,
              balance: account.balance - action.data.amount,
              transactions: [
                ...account.transactions,
                {
                  type: "Withdrawal",
                  amount: action.data.amount,
                  date: new Date()
                }
              ]
            };
          } else if (account.id === action.data.id1) {
            return {
              ...account,
              balance: account.balance + action.data.amount,
              transactions: [
                ...account.transactions,
                {
                  type: "Deposit",
                  amount: action.data.amount,
                  date: new Date()
                }
              ]
            };
          } else {
            return account;
          }
        })
      };
    case TRANSACTION_FILTER:
      let y = state.accounts.filter(account => {
        if (account.id == action.data.id) {
          return account.transactions.filter(transaction => {
            return (
              new Date(transaction.date).getTime() >=
                new Date(action.data.startDate).getTime() &&
              new Date(transaction.date).getTime() <=
                new Date(action.data.endDate).getTime()
            );
          });
        }
      })[0].transactions;
      return {
        ...state,
        display: y
      };
    default:
      return state;
  }
}
export default cash;
