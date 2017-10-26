import React from "react";
import PropTypes from "prop-types";

const ListHeader = ({ onClickHandler, test }) => {
	return (
		<div className="list_header">
			<input
				type="submit"
				className="up"
				value="Category"
				onClick={e => onClickHandler(e)}
			/>
			<input
				type="submit"
				className="up"
				value="Name"
				onClick={e => onClickHandler(e)}
			/>
			<input type="submit" value="Description" disabled />
			<input
				type="submit"
				className="up"
				value="Amount"
				onClick={e => onClickHandler(e)}
			/>
			<input
				type="submit"
				className="up"
				value="Price"
				onClick={e => onClickHandler(e)}
			/>
		</div>
	);
};
ListHeader.propTypes = {
	//onClick: PropTypes.func.isRequired
};

export default ListHeader;
