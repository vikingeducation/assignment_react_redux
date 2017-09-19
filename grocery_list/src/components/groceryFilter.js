import React from 'react';

export default ({ name, options, prettyName, onFilter }) => {
	return (
		<div>
			<label htmlFor={name}>
				{prettyName}
			</label>
			<select name={name} onChange={onFilter}>
				{options.map(option =>
					<option key={option} value={option}>
						{option}
					</option>
				)}
			</select>
		</div>
	);
};
