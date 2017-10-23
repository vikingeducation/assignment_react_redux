import React from "react";
import PropTypes from "prop-types";

const ListItemBtn = ({ onPurchase, onRemove, onEdit }) => {
	return (
		<div className="status_btn_container">
			<button type="submit" onCLick={onPurchase}>
				Purchase
			</button>
			<button type="submit" onCLick="">
				Remove
			</button>
			<button type="submit" onCLick="">
				Edit
			</button>
		</div>
	);
};

ListItemBtn.propTypes = {};
export default ListItemBtn;
