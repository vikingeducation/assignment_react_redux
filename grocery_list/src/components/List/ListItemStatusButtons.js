import React from "react";
import PropTypes from "prop-types";

const ListItemsStatusButtons = ({ onPurchase, onRemove, id }) => {
	return (
		<div className="status_btn_container">
			<button type="submit" id={id} onClick={onPurchase}>
				Purchase
			</button>
			<button type="submit" id={id} onClick={onRemove}>
				Remove
			</button>
			<button type="submit" id={id} onClick={onRemove}>
				Edit
			</button>
		</div>
	);
};

ListItemsStatusButtons.propTypes = {};
export default ListItemsStatusButtons;
