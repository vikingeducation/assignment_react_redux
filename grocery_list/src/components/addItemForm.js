import React from "react";
import { addItem } from "../actions";
import serialize from "form-serialize";
import { connect } from "react-redux";

const AddItemForm = ({ onAddItemFormSubmit }) => {
  return (
    <form onSubmit={onAddItemFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="product name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="desc">Decription</label>
        <input
          type="text"
          className="form-control"
          id="desc"
          name="desc"
          placeholder="description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          className="form-control"
          id="category"
          name="category"
          placeholder="category"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Price</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          name="amount"
          placeholder="price"
        />
      </div>
      <div className="form-group">
        <label htmlFor="imgSrc">Image Source</label>
        <input
          type="text"
          className="form-control"
          id="imgSrc"
          name="imgSrc"
          placeholder="image source"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Item
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  onAddItemFormSubmit: e => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const data = serialize(form, { hash: true });
    console.log(data);
    dispatch(addItem(data));
  }
});

const AddItemFormContainer = connect(null, mapDispatchToProps)(AddItemForm);

export default AddItemFormContainer;
