import React, {PropTypes} from 'react';




export const BankList = ({accounts}) =>{








let accountList = accounts.map((account)=>{
	return ( 
		<div>
	<p>{account.id}</p>
	<p>{account.balance}</p>
	<p>{account.transactions}</p>
	</div>
	)

})






return (

		<div className="BankList container">
		<h1>The Bank Accounts</h1>
		<div className="accounts">
		{accountList.length > 0 ? accountList : "Sorry, there are no accounts!"}
		</div>
		</div>



	)








}


