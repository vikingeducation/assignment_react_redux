import { connect } from "react-redux";

import serialize from "form-serialize";

import { addItem } from "../actions";
import NewItem from "../components/NewItem";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(addItem(data));
      form.reset();
    }
  };
};

const AddItemContainer = connect(null, mapDispatchToProps)(NewItem);

export default AddItemContainer;
