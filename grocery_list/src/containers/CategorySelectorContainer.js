import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CategorySelector from "../components/filter/CategorySelector";
import { categoryFilter } from "../actions";

const mapStateToProps = (state, ownProps) => {
	return {
		categories: state.groceryList.map(item => {
			return item.category;
		})
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSelect: e => {
			dispatch(categoryFilter(e.target.value));
		}
	};
};

const CategorySelectorContainer = connect(mapStateToProps, mapDispatchToProps)(
	CategorySelector
);

CategorySelectorContainer.propTypes = {};
export default CategorySelectorContainer;
