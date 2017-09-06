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
  purchaseFilter,
  orderBy
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

    <FormItem
      name="Order"
      attrs={{
        required: "true",
        componentClass: "select",
        name: "order",
        defaultValue: orderBy
      }}
    >
      {["Name", "Description"].map(order => (
        <option key={order} value={order}>
          {order}
        </option>
      ))}
    </FormItem>

    <Button type="submit" bsStyle="primary">
      Filter
    </Button>
  </form>
);

export default FilterForm;
