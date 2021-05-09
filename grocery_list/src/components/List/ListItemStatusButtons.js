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
		<div className="status_btn_container container">
			<input
				className={classNames}
				type="submit"
				id={id}
				onClick={onPurchaseToggle}
				value={status ? "Got It!" : "Purchase"}
			/>
			<button className="col-6" type="submit" id={id} onClick={onRemove}>
				Remove
			</button>
		</div>
	);
};

ListItemsStatusButtons.propTypes = {};
export default ListItemsStatusButtons;

/***********************
<button type="submit" id={id} onClick={onRemove}>
	Edit
</button>
************************/
