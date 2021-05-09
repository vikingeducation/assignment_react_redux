import React from "react";

export const Header = () => {
	return (
		<div className="header mx-auto my-5">
			<div className="jumbotron d-none d-md-block ">
				<h1 className="display-2 text-center ">Shopping list</h1>
			</div>
			<div className="sm_header d-block d-md-none rounded">
				<h1 className=" display-5 text-center pt-3">Shopping list</h1>
			</div>
		</div>
	);
};

export default Header;
