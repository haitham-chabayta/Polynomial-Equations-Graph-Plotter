import React, { Component } from "react";
import Equation from "./components/equation";
import LineChart from "./components/lineChart";
import NavBar from "./components/navBar";
import "./App.css";

class App extends Component {
  state = {
    dataArray: [],
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <LineChart />
      </React.Fragment>
    );
  }
}

export default App;
