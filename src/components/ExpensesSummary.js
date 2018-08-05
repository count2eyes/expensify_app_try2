import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selector from "../selectors/expenses";
import expensesTotal from "../selectors/expensesTotal";

export class ExpensesSummary extends React.Component {
  render() {
    const string = this.props.count > 1 ? "expenses" : "expense";
    const totalDOM = numeral(this.props.total / 100).format("$0,0.00");

    return (
      <div>
        <h3>
          Viewing {this.props.count} {string} totalling {totalDOM}
        </h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const expenses = selector(state.expenses, state.filters);
  return {
    total: expensesTotal(expenses),
    count: expenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
