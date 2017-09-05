import React from "react";
import { Button } from "react-bootstrap";
import FormItem from "./FormItem";

const purchaseOpts = {
  All: "null",
  Purchased: "true",
  "Not Purchased": "false"
};

const FilterForm = ({
  onFilterGrocery,
  categories,
  categoryFilter,
  purchaseFilter
}) => (
  <form onSubmit={onFilterGrocery}>
    <FormItem
      name="Category"
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

    <FormItem
      name="Purchased"
      attrs={{
        required: "true",
        componentClass: "select",
        name: "purchased",
        defaultValue: purchaseFilter
      }}
    >
      {Object.entries(purchaseOpts).map(([opt, val]) => (
        <option key={opt} value={val}>
          {opt}
        </option>
      ))}
    </FormItem>

    <Button type="submit" bsStyle="primary">
      Filter
    </Button>
  </form>
);

export default FilterForm;
