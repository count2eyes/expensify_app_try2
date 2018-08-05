import React from "react";
import AddExpenseForm from "./AddExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import { connect } from "react-redux";

export class EditItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = stateObj => {
    this.props.startEditExpense(this.props.expense.id, stateObj);
    this.props.history.push("/");
  };

  onClick = () => {
    this.props.startRemoveExpense(this.props.expense.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h3>Edit your expense</h3>
        <AddExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, stateObj) => dispatch(startEditExpense(id, stateObj)),

  startRemoveExpense: id => dispatch(startRemoveExpense(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditItem);
