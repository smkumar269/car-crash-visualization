/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import GeoJSONMap from "components/geoJsonMap";
import Pie from "components/pie";
import Header from "components/header";
import { Report, Questionaire } from "components/lib";
import {
  CAR_CRASH_GEOJSON,
  NEIGHBORHOOD_CRASH_TOP_5_BY_YEAR,
} from "data/staticData";

function Dashboard() {
  const [filter, setFilter] = React.useState("all");
  const onFilterChange = (value) => setFilter(value);
  const getDateRangeText = () =>
    filter === "all" ? "from 2010 - 2014" : `for ${filter}`;

  return (
    <>
      <Header filter={filter} filterCb={onFilterChange} />
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(600px, 1fr))",
        }}
      >
        <Report>
          <Questionaire>
            {`What are the total crashes in the neighbourhood ${getDateRangeText()}?`}
          </Questionaire>
          <GeoJSONMap filter={filter} data={CAR_CRASH_GEOJSON} />
        </Report>

        <Report>
          <Questionaire>
            {`Which are the top 5 unsafe neighborhood ${getDateRangeText()}?`}
          </Questionaire>
          <Pie filter={filter} data={NEIGHBORHOOD_CRASH_TOP_5_BY_YEAR} />
        </Report>
      </div>
    </>
  );
}

export default Dashboard;
