import React from "react";
import PropTypes from "prop-types";
import FilterContainer from "../containers/FilterContainer";
/*
  FOR TOMORROW
  
  Add html input datetime for start time and end time
  So, convert the html stuff to UTC if not already
  set it as UTC on state (and change defaults as necessary)
  then whenever transaction list is being processed, simply do
  "getVisibleTransactions(transactions, starttime, end time)"
  quick easy number comparison >= <=
  and baddabing baddaboom you iz done with this project

  should take like half an hour I think
*/


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
      <h3>Transaction History</h3>
      <FilterContainer />
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