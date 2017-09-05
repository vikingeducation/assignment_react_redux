import React from "react";
import { Button } from "react-bootstrap";
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

const GroceryForm = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
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
        defaultValue: "1",
        min: "0"
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

export default GroceryForm;
