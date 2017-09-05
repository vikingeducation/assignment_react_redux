import React from 'react';
import PurchasedButton from '../components/purchasedButton';

function GroceryItem({ id, imgSrc, name, desc, category, amount, purchased }) {
	return (
		<div className="col-md-4 product">
			<div className="thumbnail">
				<img src={imgSrc} alt={desc} />
				<div className="caption">
					<h4>
						<strong>Name:</strong> {name}
					</h4>
					<p className="description">
						<strong>Description:</strong> {desc}
					</p>
					<p>
						<strong>Category:</strong> {category}
					</p>
					<p>
						<strong>Cost:</strong> ${amount}
					</p>
					<PurchasedButton id={id} isPurchased={purchased} />
				</div>
			</div>
		</div>
	);
}

export default GroceryItem;
