/****************************
This component will return the FilterContainer to App.
*****************************/
import React from "react";
import PropTypes from "prop-types";
import FilterLinkContainer from "../containers/FilterLinkContainer";
import CategorySelectorContainer from "../containers/CategorySelectorContainer";

const Filter = props => {
	return (
		<div className="filter_container">
			<FilterLinkContainer filter="All">All</FilterLinkContainer>
			<FilterLinkContainer filter="Purchased">Purchased</FilterLinkContainer>
			<FilterLinkContainer filter="NotPurchased">
				Not Purchased
			</FilterLinkContainer>
			<CategorySelectorContainer />
		</div>
	);
};

Filter.propTypes = {};
export default Filter;
