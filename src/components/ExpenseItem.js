import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const ExpenseItem = props => {
  const { description, amount, note, createdAt, id } = props.expense;
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        ${amount / 100} - {moment(createdAt).format("ddd DD MMM, YYYY")} -{" "}
        <small>{note}</small>
      </p>
    </div>
  );
};

export default ExpenseItem;
