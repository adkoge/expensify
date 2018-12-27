import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
<<<<<<< HEAD
        <Route path="/edit/:id" component={EditExpensePage} />
=======
        <Route path="/edit" component={EditExpensePage} />
>>>>>>> 81dd990124571732981d47673ddde5f82d206e77
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;