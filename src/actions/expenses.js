import React from "react";
import uuid from "uuid";

export const addExpense = ({ description, amount, note, createdAt }) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      description: description || "",
      amount: amount || 0,
      note: note || "Notes!(not like you didn't notice)",
      createdAt: createdAt || 0,
      id: uuid()
    }
  };
};

export const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

export const editExpense = (id, { description, amount, note, createdAt }) => {
  return {
    type: "EDIT_EXPENSE",
    updates: { description, amount, note, createdAt },
    id
  };
};
