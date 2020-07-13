import React, { Component } from "react";
import * as d3 from "d3";
import Equation from "./equation";

var svgWidth, svgHeight, svg;
var data = [];
var xScale, yScale;
var line;
var focus, focusText;
var bisect;
var slope;

class LineChart extends Component {
  componentDidMount() {
    this.intializeData();
    this.drawChart();
  }

  state = {
    slope: 0,
    c: 0,
    exponent: 1,
  };

  intializeData() {
    for (let i = -16; i < 17; i++) {
      let yValue = i * this.state.slope + this.state.c;
      data.push(yValue);
    }
  }

  drawChart() {
    svgWidth = 600;
    svgHeight = 400;

    svg = d3
      .select("div")
      .style("text-align", "center")
      .append("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .style("margin-top", 70);

    xScale = d3
      .scaleLinear()
      .domain([-16, 16])
      .range([0, svgWidth - 20]);

    yScale = d3
      .scaleLinear()
      .domain([-16, 16])
      .range([svgHeight - 20, 0]);

    var x_axis = d3.axisBottom().scale(xScale);

    var y_axis = d3.axisLeft().scale(yScale);

    svg.append("g").attr("transform", "translate(308, 10)").call(y_axis);

    var xAxisTranslate = svgHeight - 200;

    svg
      .append("g")
      .attr("transform", "translate(10, " + xAxisTranslate + ")")
      .call(x_axis);

    svg
      .append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", svgWidth)
      .attr("y", svgHeight - 170)
      .text("X");

    let zeroOnXAxis = document.querySelector(
      "[transform='translate(290.5,0)']"
    );

    let zeroOnYAxis = document.querySelector(
      "[transform='translate(0,190.5)']"
    );

    zeroOnXAxis.style.display = "none"; // remove zero on the x-axis
    zeroOnYAxis.style.display = "none"; // remove zero on the y-axis

    svg
      .append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", 6)
      .attr("x", svgWidth / 2 - 30)
      .attr("y", 10)
      .text("Y");

    line = d3
      .line()
      .x(function (d, i) {
        return xScale(i - 15);
      })
      .y(function (d) {
        return yScale(d);
      })
      .curve(d3.curveMonotoneX);

    svg
      .append("path")
      .attr("width", svgWidth)
      .attr("height", svgHeight)
      .datum(data)
      .attr("class", "linearLine")
      .attr("transform", "translate(0, 10)")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    focus = svg
      .append("g")
      .append("circle")
      .style("fill", "none")
      .attr("stroke", "black")
      .attr("r", 8.5)
      .style("opacity", 0);

    focusText = svg
      .append("g")
      .append("text")
      .style("opacity", 0)
      .attr("text-anchor", "left")
      .attr("alignment-baseline", "middle")
      .style("z-index", 2);
  }

  render() {
    return (
      <Equation
        changeSlope={this.slopeChanged}
        changeC={this.cValueChanged}
        changeExponent={this.exponentChanged}
      ></Equation>
    );
  }

  slopeChanged = (event) => {
    if (event.target.value == "") this.setState({ slope: 0 });
    else {
      let slopeValueInteger = parseInt(event.target.value);
      this.setState({ slope: slopeValueInteger });
    }
    setTimeout(() => {
      this.drawLine();
    }, 100);
  };

  cValueChanged = (event) => {
    if (event.target.value == "") this.setState({ c: 0 });
    else {
      let cValueInteger = parseInt(event.target.value);
      this.setState({ c: cValueInteger });
    }
    setTimeout(() => {
      this.drawLine();
    }, 100);
  };

  exponentChanged = (event) => {
    if (event.target.value == "") this.setState({ exponent: 1 });
    else {
      let exponentInteger = parseInt(event.target.value);
      this.setState({ exponent: exponentInteger });
    }
    setTimeout(() => {
      this.drawLine();
    }, 100);
  };

  drawLine() {
    data = [];
    slope = this.state.slope;
    for (let i = -16; i < 17; i++) {
      let yValue =
        Math.pow(i, this.state.exponent) * this.state.slope + this.state.c;
      data.push(yValue);
    }

    d3.select(".linearLine")
      .datum(data)
      .transition()
      .duration(1000)
      .attr("d", line);

    svg
      .append("rect")
      .style("fill", "none")
      .style("pointer-events", "all")
      .attr("width", svgWidth - 20)
      .attr("height", svgHeight)
      .on("mouseover", this.mouseover)
      .on("mousemove", this.mousemove)
      .on("mouseout", this.mouseout);
  }

  mouseover() {
    focus.style("opacity", 1);
    focusText.style("opacity", 1);
  }

  mousemove() {
    var x0 = xScale.invert(d3.mouse(this)[0]);
    var i = Math.round(x0);
    var selectedData = data[i + 16];
    focus.attr("cx", xScale(i) + 17).attr("cy", yScale(selectedData) + 12);

    if (selectedData > 16 || selectedData < -16) {
    } else if (slope == 0) {
      focusText
        .html("x:" + i + "  -  " + "y:" + selectedData)
        .attr("x", xScale(i) - 30)
        .attr("y", yScale(selectedData) + 50)
        .attr("text-anchor", "left");
    } else if (i >= 13) {
      focusText
        .html("x:" + i + "  -  " + "y:" + selectedData)
        .attr("x", xScale(i) - 80)
        .attr("y", yScale(selectedData) + 20)
        .attr("text-anchor", "left");
    } else if (i >= 0) {
      focusText
        .html("x:" + i + "  -  " + "y:" + selectedData)
        .attr("x", xScale(i) - 30)
        .attr("y", yScale(selectedData) + 50)
        .attr("text-anchor", "left");
    } else {
      focusText
        .html("x:" + i + "  -  " + "y:" + selectedData)
        .attr("x", xScale(i) + 40)
        .attr("y", yScale(selectedData) + 10)
        .attr("text-anchor", "left");
    }
  }

  mouseout() {
    focus.style("opacity", 0);
    focusText.style("opacity", 0);
  }
}

export default LineChart;
