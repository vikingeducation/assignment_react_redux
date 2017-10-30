import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ListHeader from "../../components/List/ListHeader";
import { sort } from "../../actions";

const toggleArrow = item =>
	item.className === "up sort_input col-2"
		? (item.className = "down sort_input col-2")
		: (item.className = "up sort_input col-2");

const mapStateToProps = (state, ownProps) => {
	return {};
};
//onClickHander changes sort arrow direction and dispatches sort
const mapDispatchToProps = dispatch => {
	return {
		onClickHandler: e => {
			e.preventDefault();
			toggleArrow(e.target);
			console.log("Sort click handler", e.target.className);
			dispatch(sort(e.target.value, e.target.className));
		}
	};
};

const ListHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(
	ListHeader
);
ListHeaderContainer.propTypes = {};
export default ListHeaderContainer;
