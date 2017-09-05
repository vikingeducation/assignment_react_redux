import { connect } from "react-redux";
import AccountViewer from "../components/AccountViewer";
//get actions later

const mapStateToProps = state => {
  console.log("state = ", state);
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

const AccountViewerContainer = connect(mapStateToProps, mapStateToProps)(
  AccountViewer
);

export default AccountViewerContainer;

//{id: 1, name: "ZZZZZZZ", balance: 376, transactionsFilter: "SHOW_ALL", transactions: Array(4)}
