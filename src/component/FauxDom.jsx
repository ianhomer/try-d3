import React from 'react';
import {withFauxDOM} from 'react-faux-dom'
import * as d3 from "d3";

class FauxDom extends React.Component {
  componentDidMount() {
    const faux = this.props.connectFauxDOM('div', 'chart');

    const x = d3.scaleLinear()
      .domain([0, 100])
      .range([0, 400]);

    // D3 Code to create the chart
    // using faux as container
    const g = d3.select(faux)
      .append('svg')
      .append("g");
    g.call(d3.axisBottom(x));
    g.append("circle")
      .attr("cx", 100).attr("cy", 100).attr("r", 40).style("fill", "blue");
    g.append("circle")
      .attr("cx", x(10)).attr("cy", 100).attr("r", 40).style("fill", "blue")
  }

  render() {
    return <div className="line-container">
      {this.props.chart}
    </div>
  }
}

export default withFauxDOM(FauxDom);