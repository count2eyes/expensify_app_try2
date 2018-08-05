import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const Dashboard = () => (
  <div>
    <h3>Your expenses</h3>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>
);

export default Dashboard;
