import React from "react";
import PropTypes from "prop-types";
import ListHeaderContainer from "../containers/List/ListHeaderContainer";
import ListItemsContainer from "../containers/List/ListItemsContainer";
import ListTotalContainer from "../containers/List/ListTotalContainer";
const List = props => {
	return (
		<div className="ListContainer">
			<ListHeaderContainer />
			<ListItemsContainer />
			<ListTotalContainer />
		</div>
	);
};

List.propTypes = {};
export default List;
