import { connect } from "react-redux";
import ItemList from "../components/ItemList";

const mapStateToProps = state => {
  return {
    groceries: state.groceries
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ItemList
);

export default ItemListContainer;
