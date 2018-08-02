import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import { setText, sortBy, setStartDate, setEndDate } from "../actions/filters";

export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onTextChange = e => {
    const text = e.target.value;
    this.props.setText(text);
  };

  onSelect = e => {
    const selectedOption = e.target.value;
    if (selectedOption === "date") {
      this.props.sortBy("date");
    } else if (selectedOption === "amount") {
      this.props.sortBy("amount");
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select onChange={this.onSelect}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="your_unique_start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          isOutsideRange={() => false}
          numberOfMonths={1}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setStartDate: startDate => {
    dispatch(setStartDate(startDate));
  },
  setEndDate: endDate => {
    dispatch(setEndDate(endDate));
  },
  setText: text => {
    dispatch(setText(text));
  },
  sortBy: selectedOption => {
    dispatch(sortBy(selectedOption));
  }
});

const mapStateToProps = state => ({ filters: state.filters });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseListFilters);
