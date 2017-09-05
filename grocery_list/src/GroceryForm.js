import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import serialize from "form-serialize";

const CATEGORY_NAMES = [
  "produce",
  "dairy",
  "deli",
  "bulk",
  "cheese",
  "beer",
  "wine"
];

export default class GroceryForm extends Component {
  onNewGrocery = e => {
    e.preventDefault();
    const form = e.target;
    const data = serialize(form, { hash: true });
    this.props.actions.addGrocery(data);
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.onNewGrocery}>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl required="true" type="text" name="name" />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Description</ControlLabel>
          <FormControl type="text" name="description" />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Amount</ControlLabel>
          <FormControl
            required="true"
            type="number"
            name="amount"
            defaultValue="1"
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Category</ControlLabel>
          <FormControl required="true" componentClass="select" name="category">
            {CATEGORY_NAMES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </FormControl>
        </FormGroup>

        <Button type="submit" bsStyle="primary">
          Submit
        </Button>
      </form>
    );
  }
}
