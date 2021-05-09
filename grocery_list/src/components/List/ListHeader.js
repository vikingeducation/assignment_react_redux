import React from "react";
import PropTypes from "prop-types";

const ListHeader = ({ onClickHandler }) => {
	return (
		<div className="display_header mx-auto d-flex row">
			<input
				type="submit"
				className="up sort_input col-2"
				value="Category"
				onClick={e => onClickHandler(e)}
			/>
			<input
				type="submit"
				className="up sort_input col-3"
				value="Name"
				onClick={e => onClickHandler(e)}
			/>
			<input type="submit" className="col-3" value="Description" disabled />
			<input
				type="submit"
				className="up sort_input col-2"
				value="Amount"
				onClick={e => onClickHandler(e)}
			/>
			<input
				type="submit"
				className="up sort_input col-2"
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
