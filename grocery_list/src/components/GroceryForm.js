import React, { Component } from "react";
import { Button } from "react-bootstrap";
import serialize from "form-serialize";
import FormItem from "./FormItem";

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
        <FormItem
          name="Name"
          attrs={{ required: "true", type: "text", name: "name" }}
        />
        <FormItem
          name="Description"
          attrs={{ type: "text", name: "description" }}
        />
        <FormItem
          name="Amount"
          attrs={{
            required: "true",
            type: "number",
            name: "amount",
            defaultValue: "1"
          }}
        />
        <FormItem
          name="category"
          attrs={{
            required: "true",
            componentClass: "select",
            name: "category"
          }}
        >
          {CATEGORY_NAMES.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </FormItem>

        <Button type="submit" bsStyle="primary">
          Submit
        </Button>
      </form>
    );
  }
}
