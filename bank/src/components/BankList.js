import React, { PropTypes } from "react";
import BankAccount from "./BankAccount";

const BankList = ({ accounts }) => {
  console.log(accounts);
  let accountList = accounts.map(account => <BankAccount account={account} />);

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
