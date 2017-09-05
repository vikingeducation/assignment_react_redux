import { connect } from "react-redux";
import Form from "../components/Form";
import serialize from 'form-serialize';
import {addItem} from '../actions.js';



const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (e)=>{
      e.preventDefault();
      const form =e.target;
      const data = serialize(form, {hash: true})
      console.log("FormContainer line 14: ", data)

      dispatch(addItem(data))
      form.reset()
    }
  }
};

const AddGroceryItemContainer = connect(null, mapDispatchToProps)(Form);

export default AddGroceryItemContainer;