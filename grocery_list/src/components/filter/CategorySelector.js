import React from "react";
import PropTypes from "prop-types";

//removes duplicates and returns list of category options
const makeOptions = categories => {
	categories = Array.from(new Set(categories));
	return categories.map(item => {
		return <option value={item.toLowerCase()}>{item}</option>;
	});
};

const CategorySelector = ({ categories, onSelect }) => {
	const options = makeOptions(categories);
	return (
		<div className="filter_selector">
			<label className="sr-only" for="categories selector">
				Category
			</label>
			<select
				className="form-control"
				name="categories selector"
				onChange={e => onSelect(e)}>
				<option value="All">All Categories</option>
				{options}
			</select>
		</div>
	);
};

CategorySelector.propTypes = {};
export default CategorySelector;
