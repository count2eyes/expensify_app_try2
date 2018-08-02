import moment from "moment";
import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expensesReducer";
import { addExpense } from "../actions/expenses";
import filtersReducer from "../reducers/filtersReducer";

export const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);

store.dispatch(
  addExpense({
    description: "coffee",
    amount: 165,
    createdAt: moment()
      .add(0, "days")
      .valueOf()
  })
);

store.dispatch(
  addExpense({
    description: "grocery",
    amount: 7895,
    createdAt: moment()
      .add(-15, "days")
      .valueOf()
  })
);

store.dispatch(
  addExpense({
    description: "vacation",
    note: "planned",
    amount: 36500,
    createdAt: moment()
      .add(15, "days")
      .valueOf()
  })
);

// store.subscribe(() => {
//   console.log(store);
// });
