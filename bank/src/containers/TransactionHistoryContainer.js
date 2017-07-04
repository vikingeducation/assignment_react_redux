import { connect } from "react-redux";
import TransactionHistory from "../components/TransactionHistory";

const mapStateToProps = state => {
  return {
    transactions: state.transactions
  }
};

const TransactionHistoryContainer = connect(mapStateToProps, null)(
  TransactionHistory
);

export default TransactionHistoryContainer;