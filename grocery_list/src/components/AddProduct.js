import React from "react";
import PropTypes from "prop-types";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";
import Select from "./elements/Select";

const AddProduct = ({ categories, onSubmit }) => {
  return (
    <div className="row add-product">
      <form onSubmit={onSubmit}>
        <h3>
          Add A Product
        </h3>
        <InputGroup name="name" labelText="Name">
          <Input name="name" />
        </InputGroup>
        <InputGroup name="category" labelText="Category (Optional)">
          <Select name="category" options={["", ...categories]} />
        </InputGroup>
        <InputGroup name="description" labelText="Description">
          <Input name="description" />
        </InputGroup>
        <InputGroup name="amount" labelText="Amount (Optional)">
          <Input name="amount" />
        </InputGroup>
        <InputGroup name="image" labelText="Photo Link">
          <Input name="image" />
        </InputGroup>
        <Button type="submit" color="success">Add Item to List</Button>
      </form>
    </div>
  );
};

AddProduct.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddProduct;
