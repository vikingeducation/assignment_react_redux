import { connect } from 'react-redux';
import serialize from 'form-serialize';
import AddItem from '../components/AddItem';
import { createItem } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(createItem(data));
      form.reset();
    }
  };
};

const AddItemContainer = connect(
  null,
  mapDispatchToProps
)(AddItem);

export default AddItemContainer;
