import React from "react";
import { Button } from "react-bootstrap";
import FormItem from "./FormItem";

const GroceryForm = ({ onSubmit, categories }) => (
  <form onSubmit={onSubmit}>
    <FormItem
      name="category"
      attrs={{
        required: "true",
        componentClass: "select",
        name: "category"
      }}
    >
      {categories.map(category => (
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
