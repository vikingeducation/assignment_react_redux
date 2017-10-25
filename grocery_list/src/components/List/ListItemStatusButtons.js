import React from "react";
import PropTypes from "prop-types";

const ListItemsStatusButtons = ({
	onPurchaseToggle,
	onRemove,
	id,
	classNames
}) => {
	return (
		<div className="status_btn_container">
			<button
				className={classNames}
				type="submit"
				id={id}
				onClick={onPurchaseToggle}>
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
