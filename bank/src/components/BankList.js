import React, { PropTypes } from "react"





const BankList = ({ accounts }) => {
console.log(accounts)
  let accountList = accounts.map(account => {
    return (
      <div>
        <p>Account Id: <a href={account.id}>{account.id}</a></p>
        <p>Account Balance: {account.balance}</p>
        <p>Transaction History: {JSON.stringify(account.transactions)}</p>
      </div>
    );
  });

  return (
    <div className="BankList container">
      <h1>The Bank Accounts</h1>
      <div className="accounts">
        {accountList.length > 0 ? accountList : "Sorry, there are no accounts!"}
      </div>
    </div>
  );
};

export default BankList;
