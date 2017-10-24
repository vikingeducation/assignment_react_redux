/****************************
Holds buttons for setting purchase status, removing Items. (maybe editing items)
*****************************/
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListItemBtn from "../../components/List/ListItemBtn";
import { purchaseToggle } from "../../actions";

const mapStateToProps = (state, ownProps) => {
	return {
		onPurchase: e => {
			console.log(" e.value", e.value);
		}
	};
};
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onPurchased: e => {
			console.log(" e.d", e.value);
		}
	};
};

const ListItemBtnContainer = connect(mapStateToProps, mapDispatchToProps)(
	ListItemBtn
);

ListItemBtnContainer.propTypes = {};
export default ListItemBtnContainer;
