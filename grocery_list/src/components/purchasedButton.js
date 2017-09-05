import React from 'react';
import { connect } from 'react-redux';
import { addItem, purchaseItem } from '../actions/';

const purchasedButton = ({ id, isPurchased, onPurchaseItemClick }) => {
	const button = (
		<button
			className={isPurchased ? 'btn btn-success' : 'btn btn-primary'}
			role="button"
			onClick={onPurchaseItemClick(id)}
		>
			{isPurchased ? 'Already purchased.' : 'Purchase!'}
		</button>
	);
	return !isPurchased
		? button
		: React.cloneElement(button, {
				className: 'btn btn-success',
				disabled: true
			});
};

const mapDispatchToProps = dispatch => ({
	onPurchaseItemClick: id => e => {
		dispatch(purchaseItem(id));
	}
});

const PurchasedButtonContainer = connect(null, mapDispatchToProps)(
	purchasedButton
);
export default PurchasedButtonContainer;
