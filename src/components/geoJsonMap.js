import * as React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { getInitials } from "utils/helper";

function GeoJSONMap({ filter = "all", data = {} } = {}) {
  const getMapData = () => {
    return data.features?.map((item) => {
      return [
        item.properties.name,
        filter === "all" ? item.properties.total : item.properties[filter],
      ];
    });
  };

  const options = {
    chart: {
      map: data,
      height: 650,
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom",
      },
    },

    title: {
      text: "",
    },

    colorAxis: {
      tickPixelInterval: 100,
    },

    series: [
      {
        data: getMapData(),
        keys: ["name", "value"],
        joinBy: "name",
        name: "Car crash data",
        states: {
          hover: {
            color: "#a4edba",
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            return getInitials(this.point.properties.name);
          },
          style: { fontSize: "8px" },
        },
      },
    ],
  };

  return (
    <HighchartsReact
      options={options}
      constructorType={"mapChart"}
      highcharts={Highcharts}
    />
  );
}

export default GeoJSONMap;
