import React from "react";
import AddExpenseForm from "./AddExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

export class EditItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = stateObj => {
    this.props.editExpense(this.props.expense.id, stateObj);
    this.props.history.push("/");
  };

  onClick = () => {
    this.props.removeExpense(this.props.expense.id);
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
  editExpense: (id, stateObj) => dispatch(editExpense(id, stateObj)),

  removeExpense: id => dispatch(removeExpense(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditItem);
