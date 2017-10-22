import React from "react";
import PropTypes from "prop-types";
import ListHeader from "../components/List/ListHeader";
import ListItemsContainer from "../containers/List/ListItemsContainer";
import ListTotalContainer from "../containers/List/ListTotalContainer";
const List = props => {
	return (
		<div className="ListContainer">
			<ListHeader />
			<ListItemsContainer />
			<ListTotalContainer />
		</div>
	);
};

List.propTypes = {};
export default List;
