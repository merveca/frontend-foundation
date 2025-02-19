import React from 'react';
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import App from "./App";

const store = createStore(reducer);
const rootElement = document.getElementById("root");

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
