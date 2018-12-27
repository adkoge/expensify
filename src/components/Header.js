import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" to="/" exact={true}>
      Dashboard
    </NavLink>
    <br />
    <NavLink activeClassName="is-active" to="/create">
      Create Expense
    </NavLink>
    <br />
    <NavLink activeClassName="is-active" to="/edit">
      Edit Expense
    </NavLink>
    <br />
    <NavLink activeClassName="is-active" to="/help">
      Help Page
    </NavLink>
  </header>
);

export default Header;