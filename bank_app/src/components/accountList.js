import React from "react";

export default ({accounts}) => {
	return (
		<div>
			{accounts.map(account => 
				<div key={account.id} className="account">
					<h3>{account.owner}</h3>
					<p>Balance: {account.balance}</p>
				</div>
			)}
		</div>
	)
}