import React from 'react';

export default ({name, options}) => {
	return (
		<select name={name}>
			{options.map(option =>
				<option key={option} value={option}>{option}</option>
			)}
		</select>
	)
}