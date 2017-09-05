import { connect } from "react-redux";
import Pane from "./../components/Pane";
//get actions later
console.log("pane ", Pane);
const mapStateToProps = state => {
  console.log("state = ", state);
  return {
    accounts: state.accounts
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const AccountViewerContainer = connect(mapStateToProps, mapStateToProps)(Pane);

export default AccountViewerContainer;
//state = {accounts: Array(4), transactionsDateFilter: "NEVER", currentAccount: "BOB"}
//{id: 1, name: "ZZZZZZZ", balance: 376, transactionsFilter: "SHOW_ALL", transactions: Array(4)}
