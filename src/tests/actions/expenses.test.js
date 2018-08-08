import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  addExpense,
  startAddExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
  setExpenses,
  startSetExpenses
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const middlewares = [thunk];
const createMockStore = configureStore(middlewares);
const uid = "thisisatestuid";

beforeEach(done => {
  const expenseData = {};
  expenses.forEach(({ id, description, amount, note, createdAt }) => {
    expenseData[id] = { description, amount, note, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expenseData)
    .then(() => {
      done();
    });
});

test("should setup addExpense action w/ provided data", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to store n firebase w/ data", done => {
  const store = createMockStore({ auth: { uid } });

  const expenseData = {
    description: "car",
    amount: 257000,
    note: "meh car",
    createdAt: -456780
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense to store n firebase w/o data", done => {
  const store = createMockStore({ auth: { uid } });
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          description: "",
          amount: 0,
          note: "",
          createdAt: 0,
          id: expect.any(String)
        }
      });
      return database
        .ref(`users/${uid}/expenses/${actions[0].expense.id}`)
        .once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual({
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
      });
      done();
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

test("should remove expenses from firebase", done => {
  const store = createMockStore({ auth: { uid } });
  const id = expenses[1].id;
  store.dispatch(startRemoveExpense(id)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "REMOVE_EXPENSE", id });
  });
  return database
    .ref(`users/${uid}/expenses/${id}`)
    .once("value")
    .then(snapshot => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test("should setup editExpense action object correctly", () => {
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

test("should editExpense from firebase", done => {
  const store = createMockStore({ auth: { uid } });
  const id = expenses[2].id;
  const updates = { amount: 500 };

  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({ type: "EDIT_EXPENSE", id, updates });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
});

test("should setup setExpenses action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({ type: "SET_EXPENSES", expenses });
});

test("should fetch the expenses from firebase", done => {
  const store = createMockStore({ auth: { uid } });
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "SET_EXPENSES", expenses });
    done();
  });
});
