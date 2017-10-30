import React from "react";

const Input = props => {
	const { className, value, placeholder, type, icon, editable } = props;
	const classNames = `${className}`;
	const editables = `${editable}`;
	if (icon) {
		return (
			<input
				type={type}
				placeholder={placeholder}
				className={classNames}
				value={`${icon} ${value}`}
			/>
		);
	}
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
