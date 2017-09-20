As a bank employee, I want to...

Select an account to view.
Deposit money into an account.
Withdraw money from an account.
Transfer money between accounts.
Filter transactions by date (using a start and end date).


account objects
{
  accountId: integer
  balance: integer
  transactions: []
}

transaction objects
{
  date:
  action:
  account:
  (optional)account2:
}

state = {
  accounts: [
    {
      id: 1,
      balance: 100,
      transations: [{ type: withdrawal, amount: 100, source: bank/account, end: bank/account, date}]
    },
    {
      id: 2,
      balance: 500
    }
  ],
  selectedaccount: {},
  transactions: [{ type: withdrawal, amount: 100, source: bank/account, end: bank/account, date},{ type: withdrawal, amount: 100, source: bank/account, end: bank/account}]
}

actions:

Log specific account (take an account Id)

Deposit money (account, amount)
Withdraw (account, amount)
Transfer (fromAccount, toAccount, amount)

Log transactions (account, startDate, endDate)
