import React, { PropTypes } from "react";

const BankAccount = ({ account }) => {
  const { id, balance, transactions } = account;

  return (
    <div className="container">
      <h3>Bank Account ID: {id}</h3>
      <h4>Balance: ${balance}</h4>
      <p>Transactions: {JSON.stringify({ transactions })}</p>
    </div>
  );
};

export default BankAccount;
