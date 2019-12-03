import React, {Component} from 'react';
import * as d3 from "d3";

export default class SimpleChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const height = this.props.height;
    const svg = d3
      .select("#canvas")
      .append("svg")
      .attr("width", this.props.width)
      .attr("height", height)

    svg.append("circle").attr("cx", 100).attr("cy", 100).attr("r", 40).style("fill", "blue");
    svg.selectAll("rect")
      .data(this.props.data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => height - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "black")
  }

  render(){
    return (
      <div id={"#" + this.props.id}>Data {JSON.stringify(this.props.data)}</div>
    );
  }
}