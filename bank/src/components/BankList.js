<<<<<<< HEAD
import React, { PropTypes } from "react";
import BankAccount from "./BankAccount";

const BankList = ({ accounts }) => {
  console.log(accounts);
  let accountList = accounts.map(account => (
    <BankAccount
      id={account.id}
      balance={account.balance}
      transactions={account.transactions}
    />
  ));
=======
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
>>>>>>> 8682c689c40f43fde3f7659b2db8984bd8b87c5e

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
