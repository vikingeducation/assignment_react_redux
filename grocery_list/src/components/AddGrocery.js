import React from "react";
import PropTypes from "prop-types";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

class AddGrocery extends Component {
  constructor() {
    super(props);
    const { onSubmit } = props;

    this.state.view = "visible";
  }

  handleClick = ()

  render({ onSubmit }) {
    <form className="container" onSubmit={onSubmit}>
      <h1>
        Add A Grocery{" "}
        <span className="glyphicon glyphicon-search" aria-hidden="true" />
      </h1>
      <InputGroup name="name" labelText="Name">
        <Input name="name" />
      </InputGroup>
      <InputGroup name="description" labelText="description">
        <Input name="description" />
      </InputGroup>
      <InputGroup name="desiredAmount" labelText="Desired Amount">
        <Input name="desiredAmount" />
      </InputGroup>
      <InputGroup name="category" labelText="Category">
        <Input name="category" />
      </InputGroup>
      <Button type="submit" color="primary">
        Save Grocery
      </Button>
    </form>;
  }
}

AddGrocery.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddGrocery;
