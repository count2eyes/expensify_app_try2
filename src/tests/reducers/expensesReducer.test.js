import expenses from "../fixtures/expenses";
import expenseReducer from "../../reducers/expensesReducer";

let state;

beforeEach(() => {
  state = expenses;
});

test("should set up default expense value", () => {
  const expenseReducerResult = expenseReducer(undefined, { type: "@@INIT" });
  expect(expenseReducerResult).toEqual([]);
});

test("should return state w/ invalid data", () => {
  expect(expenseReducer(expenses, { type: "okki-bokki" })).toEqual(expenses);
});

test("should add expense to state with valid data", () => {
  const expense = { ...expenses[1], id: "4", description: "wine" };
  const action = { type: "ADD_EXPENSE", expense };
  const addExpenseReducer = expenseReducer(state, action);
  expect(addExpenseReducer).toEqual([...state, expense]);
});

test("should remove expense from state correctly", () => {
  const expense = expenses[1];
  const action = { type: "REMOVE_EXPENSE", id: expense.id };
  const removeExpenseReducer = expenseReducer(state, action);
  expect(removeExpenseReducer).toEqual([expenses[0], expenses[2]]);
});

test("should edit expense in current state correctly", () => {
  const expense = expenses[1];
  const action = {
    type: "EDIT_EXPENSE",
    updates: { ...expense, description: "wine" },
    id: expense.id
  };
  const editExpenseReducer = expenseReducer(state, action);
  expect(editExpenseReducer).toEqual([
    expenses[0],
    { ...expenses[1], description: "wine" },
    expenses[2]
  ]);
});
