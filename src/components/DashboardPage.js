import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const Dashboard = () => (
  <div>
    <h3>Your expenses</h3>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default Dashboard;
