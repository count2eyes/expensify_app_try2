import React from "react";
import { connect } from "react-redux";
import AddExpenseForm from "./AddExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class CreateItem extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = stateObj => {
    this.props.startAddExpense(stateObj);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h3>Add your expense here</h3>
        <AddExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(CreateItem);
