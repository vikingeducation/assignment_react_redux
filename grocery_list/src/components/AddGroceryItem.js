import React, { PropTypes } from "react";

const AddGroceryItem = ({ onSubmit }) => {
  return (
    <form className="form-inline" onSubmit={onSubmit}>
      <div className="form-group">
        <label for="name">Name:</label>
        <input type="text" className="form-control" name="name" />
      </div>
      <div className="form-group">
        <label for="description">Description:</label>
        <input type="text" className="form-control" name="description" />
      </div>
      <div className="form-group">
        <label for="amount">Amount:</label>
        <input type="number" className="form-control" name="amount" />
      </div>
      <div className="form-group">
        <label for="category">Category:</label>
        <input type="text" className="form-control" name="category" />
      </div>
      <div className="form-group">
        <label className="radio-inline">
          <input type="radio" name="purchased" value="true" />Purchased
        </label>
        <label className="radio-inline">
          <input type="radio" name="purchased" value="false" />Not Purchased
        </label>
      </div>

      <button type="submit" className="btn btn-default">
        Submit
      </button>
    </form>
  );
};

export default AddGroceryItem;
