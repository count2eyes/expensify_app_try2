import React from "react";
import selector from "../selectors/expenses";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";

export class ExpenseList extends React.Component {
  render() {
    return (
      <div>
        {this.props.expenses.length === 0 ? (
          <h3>No expense</h3>
        ) : (
          selector(this.props.expenses, this.props.filters).map(expense => (
            <ExpenseItem expense={expense} key={expense.id} />
          ))
        )}
      </div>
    );
  }
}

export default connect(state => state)(ExpenseList);
