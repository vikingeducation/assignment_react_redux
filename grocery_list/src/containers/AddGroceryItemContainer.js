import { connect } from "react-redux";
import AddGroceryItem from "../components/AddGroceryItem";
import serialize from "form-serialize";
import { addItem } from "../actions.js";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      data.purchased = data.purchased === "true" ? true : false;

      dispatch(addItem(data));
      form.reset();
    }
  };
};

const AddGroceryItemContainer = connect(null, mapDispatchToProps)(
  AddGroceryItem
);

export default AddGroceryItemContainer;
