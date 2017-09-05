import React from 'react';
import { setPurchasedFilter, setCategoryFilter, setSortBy } from '../actions';
import serialize from 'form-serialize';
import { connect } from 'react-redux';

const FilterItemForm = ({ categories, onFilterItemFormSubmit }) => {
	console.log(categories);
	return (
		<form className="form-inline" onSubmit={onFilterItemFormSubmit}>
			<div className="col-md-2 col-md-offset-1 form-group">
				<div className="checkbox">
					<label>
						<input type="checkbox" /> Purchased?
					</label>
				</div>
			</div>
			<div className="col-md-3 form-group">
				<label htmlFor="category-filter">Category:&nbsp;</label>
				<select id="category-filter" className="form-control input-sm">
					{categories.map(category =>
						<option key={category} value={category}>
							{category}
						</option>
					)}
				</select>
			</div>
			<div className="col-md-3 form-group">
				<label htmlFor="category-filter">Sort:&nbsp;</label>
				<select id="category-filter" className="form-control input-sm">
					<option>Created</option>
					<option>Created DESC</option>
					<option>Name</option>
					<option>Name DESC</option>
					<option>Category</option>
					<option>Category DESC</option>
					<option>Price</option>
					<option>Price DESC</option>
				</select>
			</div>

			<button type="submit" className="btn btn-primary">
				Add Item
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
		dispatch(setPurchasedFilter(data));
	}
});

const FilterItemFormContainer = connect(mapStateToProps, mapDispatchToProps)(
	FilterItemForm
);

export default FilterItemFormContainer;
