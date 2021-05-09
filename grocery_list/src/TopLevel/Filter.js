/****************************
This component will return the FilterContainer to App.
*****************************/
import React from "react";
import PropTypes from "prop-types";
import FilterLinkContainer from "../containers/FilterLinkContainer";
import CategorySelectorContainer from "../containers/CategorySelectorContainer";

const Filter = props => {
	return (
		<div className="d-flex justify-content-around my-3 w-75 mx-auto">
			<FilterLinkContainer className="" filter="All">
				All
			</FilterLinkContainer>
			<FilterLinkContainer className="" filter="Purchased">
				Purchased
			</FilterLinkContainer>
			<FilterLinkContainer className="" filter="NotPurchased">
				Not Purchased
			</FilterLinkContainer>
			<CategorySelectorContainer className="" />
		</div>
	);
};

Filter.propTypes = {};
export default Filter;
