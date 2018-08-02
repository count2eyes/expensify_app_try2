import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Expensify App</h1>
    <div>
      <NavLink activeClassName="navLinkSelected" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="navLinkSelected" to="/add">
        Create
      </NavLink>
      <NavLink activeClassName="navLinkSelected" to="/help">
        Help
      </NavLink>
    </div>
  </div>
);

export default Header;
