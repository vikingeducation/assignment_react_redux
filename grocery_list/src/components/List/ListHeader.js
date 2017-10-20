import React from "react";
import PropTypes from "prop-types";
const ListHeader = ({ onclick }) => {
	return (
		<div className="list_header">
			<span>Category</span>
			<span>Name</span>
			<span>Description</span>
			<span>Amount</span>
			<span>Price</span>
		</div>
	);
};
ListHeader.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default ListHeader;
