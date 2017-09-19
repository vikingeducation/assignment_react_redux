import React from "react";
import { setPurchasedFilter, setCategoryFilter, setSortBy } from "../actions";
import serialize from "form-serialize";
import { connect } from "react-redux";

const FilterItemForm = ({ categories, onFilterItemFormSubmit }) => {
  console.log(categories);
  return (
    <form className="form-inline" onSubmit={onFilterItemFormSubmit}>
      <div className="col-md-2 col-md-offset-1 form-group">
        <div className="checkbox">
          <label class="radio-inline">
            <input
              type="radio"
              name="purchased"
              id="inlineRadio1"
              value="on"
            />{" "}
            Show Purchased
          </label>
          <label class="radio-inline">
            <input
              type="radio"
              name="purchased"
              id="inlineRadio2"
              value="off"
            />{" "}
            Show Unpurchased
          </label>
          <label class="radio-inline">
            <input
              checked
              type="radio"
              name="purchased"
              id="inlineRadio3"
              value="SHOW_ALL"
            />{" "}
            Show All
          </label>
        </div>
      </div>
      <div className="col-md-3 form-group">
        <label htmlFor="category-filter">Category:&nbsp;</label>
        <select
          name="category"
          id="category-filter"
          className="form-control input-sm"
        >
          <option value="SHOW_ALL">Show All</option>
          {categories.map(category =>
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          )}
        </select>
      </div>
      <div className="col-md-3 form-group">
        <label htmlFor="sort-filter">Sort:&nbsp;</label>
        <select
          name="sortBy"
          id="sort-filter"
          className="form-control input-sm"
        >
          <option value="created">Created</option>
          <option value="createdDesc">Created DESC</option>
          <option value="name">Name</option>
          <option value="nameDesc">Name DESC</option>
          <option value="category">Category</option>
          <option value="categoryDesc">Category DESC</option>
          <option value="price">Price</option>
          <option value="priceDesc">Price DESC</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Filter
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => ({
  onFilterItemFormSubmit: e => {
    e.preventDefault();
    const form = e.target;
    const data = serialize(form, { hash: true });
    console.log(data);
    dispatch(setPurchasedFilter(data.purchased));
    dispatch(setCategoryFilter(data.category));
    dispatch(setSortBy(data.sortBy));
  }
});

const FilterItemFormContainer = connect(mapStateToProps, mapDispatchToProps)(
  FilterItemForm
);

export default FilterItemFormContainer;
