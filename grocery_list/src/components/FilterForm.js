import React from "react";
import { Button } from "react-bootstrap";
import FormItem from "./FormItem";

const GroceryForm = ({ onNewGrocery, categories, categoryFilter }) => (
  <form onSubmit={onNewGrocery}>
    <FormItem
      name="category"
      attrs={{
        required: "true",
        componentClass: "select",
        name: "category",
        defaultValue: categoryFilter
      }}
    >
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </FormItem>

    <Button type="submit" bsStyle="primary">
      Filter
    </Button>
  </form>
);

export default GroceryForm;
