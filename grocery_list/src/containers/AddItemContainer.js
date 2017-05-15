import { connect } from "react-redux";
import serialize from "form-serialize";
import { addItem } from "../actions";
import AddItem from "../components/AddItem";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      if (data.name && data.description) {
        dispatch(addItem(data));
        form.reset();
      }
    }
  };
};

const AddItemContainer = connect(null, mapDispatchToProps)(AddItem);

export default AddItemContainer;
