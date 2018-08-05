import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import numeral from "numeral";

const ExpenseItem = props => {
  const { description, amount, note, createdAt, id } = props.expense;
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount / 100).format("$0,0.00")} -{" "}
        {moment(createdAt).format("ddd DD MMM, YYYY")} <small>{note}</small>
      </p>
    </div>
  );
};

export default ExpenseItem;
