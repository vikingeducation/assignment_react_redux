import { connect } from "react-redux";
import TransactionHistory from "../components/TransactionHistory";

const getVisibleTransactions = (transactions, filter) => {
  let results = [];
  transactions.forEach(transaction => {
    if (transaction.timestamp >= filter.start && transaction.timestamp <= filter.end) {
      results.push(transaction);
    }
  });
  return results;
};

const mapStateToProps = state => {
  return {
    transactions: getVisibleTransactions(state.transactions, state.transactionsFilter)
  }
};

const TransactionHistoryContainer = connect(mapStateToProps, null)(
  TransactionHistory
);

export default TransactionHistoryContainer;