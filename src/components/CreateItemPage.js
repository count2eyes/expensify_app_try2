import React from "react";
import { connect } from "react-redux";
import AddExpenseForm from "./AddExpenseForm";
import { addExpense } from "../actions/expenses";

export class CreateItem extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmit = stateObj => {
    this.props.addExpense(stateObj);
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
  addExpense: expense => dispatch(addExpense(expense))
});

export default connect(
  undefined,
  mapDispatchToProps
)(CreateItem);
