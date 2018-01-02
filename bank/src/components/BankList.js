import React, { PropTypes } from "react";

const BankList = ({ accounts }) => {
console.log(accounts)
  let accountList = accounts.map(account => {
    return (
      <div>
        <p>{account.id}</p>
        <p>{account.balance}</p>
        <p>{JSON.stringify(account.transactions)}</p>
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
