import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import App from "./App";
import store from "./app/store";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootElement
);