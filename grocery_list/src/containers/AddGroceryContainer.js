import { connect } from "react-redux";
import { addGrocery } from "../actions";
import GroceryForm from "../components/GroceryForm";
import serialize from "form-serialize";

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log(data);
      dispatch(addGrocery(data));
      form.reset();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroceryForm);
