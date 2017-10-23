import React from "react";

const Input = props => {
	const { className, value, placeholder, type } = props;
	const classNames = `${className}`;
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={classNames}
			value={value}
		/>
	);
};

Input.defaultProps = {
	type: "text"
};

export default Input;
