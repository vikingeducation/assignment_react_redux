import React from "react";
import PropTypes from "prop-types";

const ListItemsStatusButtons = ({
	onPurchaseToggle,
	onRemove,
	id,
	classNames,
	status
}) => {
	return (
		<div className="status_btn_container">
			<input
				className={classNames}
				type="submit"
				id={id}
				onClick={onPurchaseToggle}
				value={status ? "Got it!" : "Purchase"}
			/>
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
