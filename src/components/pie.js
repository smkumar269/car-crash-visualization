import React, { useEffect } from "react";
import * as d3 from "d3";
import * as colors from "styles/colors";

function Pie(props) {
  const { data: rawData = {}, filter = "all" } = props;
  const data = rawData[filter];
  const pallete = d3.scaleOrdinal([
    colors.blue200,
    colors.blue400,
    colors.blue500,
    colors.blue600,
    colors.blue700,
  ]);

  useEffect(() => {
    d3.select("#pie-container").select("svg").remove();

    const svg = d3
      .select("#pie-container")
      .append("svg")
      .attr("width", 600)
      .attr("height", 600)
      .append("g")
      .attr("transform", "translate(300, 300)");

    const arcGenerator = d3.arc().innerRadius(0).outerRadius(200);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const tooldiv = d3
      .select("#pie-container")
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "white")
      .style("padding", "10px 20px")
      .style("border-radius", "3px")
      .style("box-shadow", "0 0 4px 0")
      .style("opacity", ".9")
      .style("ba", "white");

    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => pallete(i))
      .style("stroke", "#ffffff")
      .style("stroke-width", 0)
      .on("mouseover", (e, d) => {
        tooldiv
          .style("visibility", "visible")
          .text(`${d.data.name}: ${d.data.value}`);
      })
      .on("mousemove", (e) => {
        tooldiv.style("top", `${e.offsetY}px`).style("left", `${e.offsetX}px`);
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      });

    arc
      .append("text")
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text((d) => d.data.name)
      .style("fill", "white")
      .attr("transform", (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      })
      .on("mouseover", (e, d) => {
        tooldiv
          .style("visibility", "visible")
          .text(`${d.data.name}: ${d.data.value}`);
      });
  }, [data, pallete]);

  return <div id="pie-container" />;
}

export default Pie;
