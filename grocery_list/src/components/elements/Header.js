import React from "react";

const HeaderBrand = ({title}) => {
  return (
    <div className="navbar-header">
      <a className="navbar-brand" href="/">{title}</a>
    </div>
  );
};

const Header = ({title}) => {
  return (
    <nav className="Header navbar bg-primary">
      <div className="container-fluid">
        <HeaderBrand title={title}/>
      </div>
    </nav>
  );
};

export default Header;
