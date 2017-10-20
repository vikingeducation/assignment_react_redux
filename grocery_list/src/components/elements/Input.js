import React from "react";

const Input = props => {
	const { className, value } = props;
	const classNames = `${className}`;

	return <input className={classNames} value={value} />;
};

Input.defaultProps = {
	type: "text"
};

export default Input;
