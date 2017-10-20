import React from "react";
import PropTypes from "prop-types";

const FilterLink = ({ status, onClick, children }) => {
	if (status) {
		return { children };
	}
	return (
		<a href="#" onClick={e => onClick()}>
			{children}
		</a>
	);
};

FilterLink.propTypes = {
	status: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};
export default FilterLink;
