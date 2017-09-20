import React from "react";
import PropTypes from "prop-types";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";
import Input from "./elements/Input";

const AddItem = ({ onSubmit }) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>Add An Item </h1>
    <InputGroup name="name" labelText="Name">
      <Input name="name" />
    </InputGroup>
    <InputGroup name="quantity" labelText="Quantity">
      <Input name="quantity" />
    </InputGroup>
    <InputGroup name="category" labelText="Category">
      <Input name="category" />
    </InputGroup>
    <InputGroup name="description" labelText="Description">
      <Input name="description" />
    </InputGroup>
    <Button type="submit" color="primary">Save Item</Button>
  </form>
);

AddItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddItem;
