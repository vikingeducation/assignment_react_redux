import { connect } from "react-redux";
import serialize from "form-serialize";
import { addProduct } from "../actions";
import AddProduct from "../components/AddProduct";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(addProduct(data));
      form.reset();
    }
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: ownProps.categories
  };
};

const AddProductContainer = connect(mapStateToProps, mapDispatchToProps)(
  AddProduct
);

export default AddProductContainer;
