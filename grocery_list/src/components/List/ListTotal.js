/****************************
Shows the total of amount of items.
take props of the total ListTotalContainer
*****************************/

import React from "react";
import PropTypes from "prop-types";

const ListTotal = ({ total }) => {
	return (
		<div className="amount_total d-flex mx-auto ">
			<p className="">Total Amount:</p>
			<p className="mx-1">{total}</p>
		</div>
	);
};

ListTotal.propTypes = {};
export default ListTotal;
