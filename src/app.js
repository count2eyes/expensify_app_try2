import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";

import { Provider } from "react-redux";

import { store } from "./store/configureStore";
import "react-dates/lib/css/_datepicker.css";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
const JSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(JSX, document.getElementById("app"));
