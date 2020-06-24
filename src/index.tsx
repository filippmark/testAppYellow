import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "react-datepicker/dist/react-datepicker.css";
import { Provider } from "react-redux";
import configureStore from "./reducers/configStore";
import { initialState as authInit } from "./reducers/auth";
import { initialState as filetrInit } from "./reducers/filter";
import { initialState as jogsInit } from "./reducers/jogs";

const token = localStorage.getItem("token");
let auth = {
  ...authInit,
};

if (token) {
  auth = {
    ...auth,
    token,
  };
}

const store = configureStore({
  filter: {
    ...filetrInit,
  },
  jogs: {
    ...jogsInit,
  },
  auth,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
