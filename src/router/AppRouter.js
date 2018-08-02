import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/DashboardPage";
import Header from "../components/Header";
import CreateItem from "../components/CreateItemPage";
import Help from "../components/HelpPage";
import NotFound from "../components/NotFoundPage";
import EditItem from "../components/EditItemPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/edit/:id" component={EditItem} exact />
          <Route path="/add" component={CreateItem} exact />
          <Route path="/help" component={Help} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
