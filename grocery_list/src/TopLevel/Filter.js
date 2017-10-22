/****************************
This component will return the FilterContainer to App.
*****************************/
import React from "react";
import PropTypes from "prop-types";
import FilterLinkContainer from "../containers/FilterLinkContainer";

const Filter = props => {
	return (
		<div>
			<FilterLinkContainer filter="All">All</FilterLinkContainer>
			<FilterLinkContainer filter="Purchased">Purchased</FilterLinkContainer>
			<FilterLinkContainer filter="NotPurchased">
				Not Purchased
			</FilterLinkContainer>
		</div>
	);
};

Filter.propTypes = {};
export default Filter;
