import React from 'react';
import Grocery from './grocery';

export default ({ groceries, onSubmit }) => {
	return (
		<div>
			{groceries.map(grocery => {
				return <Grocery key={grocery.id} {...grocery} onSubmit={onSubmit}/>;
			})}
		</div>
	);
};
