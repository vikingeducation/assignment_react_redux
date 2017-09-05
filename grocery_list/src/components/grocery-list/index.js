import React from 'react';
import PurchasedButton from '../purchased-button';

function GroceryItem({ imgSrc, title, desc, purchased }) {
	return (
		<div>
			<div class="col-sm-6 col-md-4">
				<div class="thumbnail">
					<img src={imgSrc} alt={desc} />
					<div class="caption">
						<h3>
							{title}
						</h3>
						<p>
							{desc}
						</p>
						<PurchasedButton purchased={purchased} />
					</div>
				</div>
			</div>
		</div>
	);
}
