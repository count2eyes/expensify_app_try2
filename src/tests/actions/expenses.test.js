import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should return addExpense action object correctly default data", () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      note: "Notes!(not like you didn't notice)",
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

test("should return addExpense action object correctly with data", () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: expenses[0].description,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createdAt: expenses[0].createdAt,
      id: expect.any(String)
    }
  });
});

test("should return removeExpense action object correctly", () => {
  const id = "abc123";
  const action = removeExpense(id);
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id
  });
});

test("should return editExpense action object correctly", () => {
  const action = editExpense(expenses[0].id, expenses[0]);
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    updates: {
      description: expenses[0].description,
      amount: expenses[0].amount,
      note: expenses[0].note,
      createdAt: expenses[0].createdAt
    },
    id: expenses[0].id
  });
});

// test("should return editExpense action object correctly", () => {
//   const newDescription = "decaf";
//   const action = editExpense(expenses[0].id, {
//     ...expenses[0],
//     description: newDescription
//   });
//   expect(action).toEqual({
//     type: "EDIT_EXPENSE",
//     updates: {
//       description: newDescription,
//       amount: expenses[0].amount,
//       note: expenses[0].note,
//       createdAt: expenses[0].createdAt
//     },
//     id: expenses[0].id
//   });
// });

// {
//   description: "",
//     amount: 0,
//       note: "",
//         createdAt: ""
// }
