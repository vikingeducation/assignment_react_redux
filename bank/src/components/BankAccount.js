import React, { PropTypes } from "react";

const BankAccount = ({ account }) => {
  const { id, balance, transactions } = account;

  return (
    <div className="container">
      <h2>{id}</h2>
      <h2>{balance}</h2>
      <p>{JSON.stringify({ transactions })}</p>
    </div>
  );
};

export default BankAccount;
