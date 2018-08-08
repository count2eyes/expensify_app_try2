import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Dashboard from "../components/DashboardPage";
import CreateItem from "../components/CreateItemPage";
import NotFound from "../components/NotFoundPage";
import EditItem from "../components/EditItemPage";
import LoginPage from "../components/LoginPage";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRouter path="/" component={LoginPage} exact />
          <PrivateRouter path="/dashboard" component={Dashboard} />
          <PrivateRouter path="/edit/:id" component={EditItem} />
          <PrivateRouter path="/add" component={CreateItem} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
