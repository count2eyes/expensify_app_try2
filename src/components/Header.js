import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <div>
    <h1>Expensify App</h1>
    <div>
      <NavLink activeClassName="navLinkSelected" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="navLinkSelected" to="/add">
        Create
      </NavLink>
    </div>
    <button onClick={startLogout}>Logout</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
