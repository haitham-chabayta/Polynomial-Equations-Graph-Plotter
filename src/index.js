import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import * as serviceWorker from "./serviceWorker";
import Equation from "./components/equation";
import LineChart from "./components/lineChart";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
