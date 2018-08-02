import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";

export class AddExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? props.expense.amount : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;

    this.setState(() => ({ description }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (/^\d*(\.\d{0,2})?$/.test(amount)) {
      this.setState(() => ({ amount }));
    } else return undefined;
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onDateChange = date =>
    this.setState({
      createdAt: date
    });

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide expense description & amount!"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: this.state.amount,
        note: this.state.note,
        createdAt: moment(this.state.createdAt)
      });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          {this.state.error ? <h4>{this.state.error}</h4> : null}
          <input
            type="text"
            onChange={this.onDescriptionChange}
            value={this.state.description}
            placeholder="Description"
          />
          <input
            type="number"
            onChange={this.onAmountChange}
            value={this.state.amount}
            placeholder="Amount"
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={({ focused }) =>
              this.setState({
                focused
              })
            }
            isOutsideRange={() => false}
            numberOfMonths={1}
            id="your_unique_id"
          />
          <textarea
            onChange={this.onNoteChange}
            value={this.state.note}
            placeholder="Your expense note (optional)"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default connect(state => state)(AddExpenseForm);
