import React from "react";
import PropTypes from "prop-types";

const FilterLink = ({ status, onClick, children }) => {
	if (status) {
		return <span>{children}</span>;
	}
	return (
		<div>
			<a href="#" onClick={e => onClick()}>
				{children}
			</a>
		</div>
	);
};

FilterLink.propTypes = {
	status: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
};
export default FilterLink;
