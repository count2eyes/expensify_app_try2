import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expenseReducer from "../reducers/expensesReducer";
import filtersReducer from "../reducers/filtersReducer";
import authReducer from "../reducers/authReducer";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer,
    auth: authReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);
