/*
Holds 3 buttons
Purchase (toggle)
remove
Edit
*/
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItemsStatusButtons from "../../components/List/ListItemStatusButtons";
import { purchaseToggle, remove, id, status } from "../../actions";

const mapStateToProps = (state, ownProps) => {
	return {
		id: ownProps.id,
		status: ownProps.status
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onPurchase: e => {
			e.preventDefault();
			//console.log("e.value purchase", e.target);
			let id = parseInt(e.target.id);
			dispatch(purchaseToggle(id));
		},
		onRemove: e => {
			e.preventDefault();
			dispatch(remove(e.value));
		}
	};
};

const ListItemsStatusButtonsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ListItemsStatusButtons);

ListItemsStatusButtonsContainer.propTypes = {};
export default ListItemsStatusButtonsContainer;
