import React from "react";
import PropTypes from "prop-types";
import InputGroup from "./elements/InputGroup";
import Input from "./elements/Input";
import Button from "./elements/Button";
import Select from "./elements/Select";

const TransactionHistory = ({transactions}) => {
  const transactionList = transactions.map(transaction => {
    let date = new Date(transaction.timestamp);
    return (
      <tr key={transaction.timestamp}>
        <td>{date.toLocaleString()}</td>
        <td>{transaction.kind}</td>
        <td>${transaction.amount}</td>
        <td>{transaction.owner}</td>
        <td>{transaction.receiver}</td>
      </tr>
    )
  });
  return (
    <div className="col-md-12">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Owner ID</th>
            <th>Receiver ID</th>
          </tr>
        </thead>
        <tbody>
          {transactionList}
        </tbody>
      </table>
    </div>
  )
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default TransactionHistory;