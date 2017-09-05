import { connect } from "react-redux";
import Table from "../components/Table";

const mapStateToProps = state => {
  return { groceryItems: state.items };
};

const TableContainer = connect(mapStateToProps, null)(Table);

export default TableContainer;
