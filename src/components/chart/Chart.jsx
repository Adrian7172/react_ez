import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import "../scss/chart.scss";

const Chart = () => {
  const d3Chart = useRef();
  // Ref for resize event update
  const update = useRef(false);
  const [sample, setSample] = useState([
    { category: "A", quantity: 123 },
    { category: "B", quantity: 151 },
    { category: "C", quantity: 89 },
    { category: "D", quantity: 124 },
  ]);

  // Ref for updating dimention
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const change = () => {
    setSample(
      sample.map((item) => {
        let val = Math.floor(Math.random() * 140) + 20;
        return {
          category: item.category,
          quantity: val,
        };
      })
    );
    // console.log(sample)
  };

  useEffect(() => {
    // Listen for any resize event update
    window.addEventListener("resize", () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });

    // If resize, remove the previous chart
    // also for click on the chart
    if (update.current) {
      d3.selectAll("g").remove();
    } else {
      update.current = true;
    }

    // Draw chart using the data and updated dimensions
    DrawChart(sample, dimensions);
  }, [sample, dimensions]);
  const margin = { top: 50, right: 30, bottom: 30, left: 60 };

  function DrawChart(data) {
    const chartwidth =
      parseInt(d3.select("#chart").style("width")) - margin.left - margin.right;
    const chartheight =
      parseInt(d3.select("#chart").style("height")) -
      margin.top -
      margin.bottom;

    const svg = d3
      .select(d3Chart.current)
      .attr("width", chartwidth + margin.left + margin.right)
      .attr("height", chartheight + margin.top + margin.bottom);

    // x scale
    const x = d3
      .scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartwidth - margin.right])
      .padding(0.1);

    svg
      .append("g")
      .attr("transform", "translate(0," + chartheight + ")")
      .call(
        d3
          .axisBottom(x)
          .tickFormat((i) => data[i].category)
          .tickSizeOuter(0)
      );

    const max = d3.max(data, function (d) {
      return d.quantity;
    });

    // y scale
    const y = d3
      .scaleLinear()
      .domain([0, max])
      .range([chartheight, margin.top]);

    svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

    // Draw bars
    svg
      .append("g")
      .attr("fill", "#29a4e1")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d.quantity))
      .attr("height", function (d) {
        return y(0) - y(d.quantity);
      })
      .attr("width", x.bandwidth());
  }

  return (
    <div id="chart" onClick={change}>
      <svg ref={d3Chart}></svg>
    </div>
  );
};

export default Chart;
