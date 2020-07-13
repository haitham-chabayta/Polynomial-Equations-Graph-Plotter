import React, { Component } from "react";
import LineChart from "./lineChart";
var dataPoints = [];

class Equation extends Component {
  state = {
    slope: 0,
    c: 0,
  };

  equationStyle = {
    fontSize: 44,
    textAlign: "center",
    fontFamily: "'Crimson Text', serif",
    marginTop: 60,
    marginRight: 60,
  };

  inputStyle = {
    display: "inline",
    padding: 0,
    fontSize: 36,
    width: 67,
    height: 54,
    textAlign: "center",
  };

  inputStyle2 = {
    display: "inline",
    position: "relative",
    padding: 0,
    fontSize: 16,
    width: 40,
    height: 33,
    bottom: 35,
    right: 8,
    textAlign: "center",
  };

  render() {
    return (
      <div style={this.equationStyle}>
        <span> Y </span> <span className="mr-2"> = </span>
        <input
          style={this.inputStyle}
          onChange={this.props.changeSlope}
          type="number"
          placeholder="0"
          className="form-control"
        />{" "}
        <span className="mr-2"> X </span>
        <input
          style={this.inputStyle2}
          onChange={this.props.changeExponent}
          type="number"
          placeholder="1"
          max="6"
          min="-10"
          className="form-control"
        />
        <span className="mr-2"> + </span>{" "}
        <input
          style={this.inputStyle}
          onChange={this.props.changeC}
          type="number"
          placeholder="0"
          max="15"
          min="-15"
          className="form-control"
        />
      </div>
    );
  }
}

export default Equation;
