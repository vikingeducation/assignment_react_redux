import React from 'react';
import Grocery from './grocery';

export default ({ groceries }) => {
	return (
		<div>
			{groceries.map(grocery => {
				return <Grocery key={grocery.id} {...grocery} />;
			})}
		</div>
	);
};
