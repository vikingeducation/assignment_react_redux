import React, { PropTypes } from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const NewItem = ({ onSubmit }) =>
  <form className="container" onSubmit={onSubmit}>
    <h5>What'd you forget...add an item here.</h5>
    <InputGroup name="name">
      <Input />
    </InputGroup>
    <InputGroup name="description" labelText="Description">
      <Input />
    </InputGroup>
    <InputGroup name="amount" labelText="Amount">
      <Input />
    </InputGroup>
    <InputGroup name="category">
      <Input />
    </InputGroup>
  </form>;

NewItem.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default NewItem;

// {name: "hat", description: "a sweet hat", amount: 1, category: "hats", purchased: false}
