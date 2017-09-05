import { connect } from "react-redux";
import ItemList from "../components/ItemList";
import { purchaseItem, removeItem } from "../actions";
import serialize from "form-serialize";

const mapStateToProps = state => {
  return {
    groceries: state.groceries
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onClick: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      dispatch(removeItem(data.id));
      // form.reset();
    },
    onPurchase: e => {
      e.preventDefault();
      const form = e.target;
      console.log("form =", form);
      const data = serialize(form, { hash: true });
      console.log("data = ", data);
      dispatch(purchaseItem(data.id));
    }
  };
};

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ItemList
);

export default ItemListContainer;
