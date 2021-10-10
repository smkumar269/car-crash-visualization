/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as React from "react";
import { Listbox, ListboxOption, ListListboxOptions } from "components/lib";

function Header({ filter = "all", filterCb } = {}) {
  return (
    <header
      css={{
        display: "flex",
        margin: "35px 30px",
        columnGap: "20px",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "flex-start",
        alignItems: "baseline",
      }}
    >
      <h3>Washington, D.C Car Crash Statistics</h3>
      <Listbox
        aria-labelledby="car crash year list"
        defaultValue={filter}
        onChange={filterCb}
        data-testid="crashYearList"
      >
        <ListListboxOptions data-testid="crashYearOptions">
          <ListboxOption value="all">All (2010 - 2014)</ListboxOption>
          <ListboxOption value="2010">2010</ListboxOption>
          <ListboxOption value="2011">2011</ListboxOption>
          <ListboxOption value="2012">2012</ListboxOption>
          <ListboxOption value="2013">2013</ListboxOption>
          <ListboxOption value="2014">2014</ListboxOption>
        </ListListboxOptions>
      </Listbox>
    </header>
  );
}

export default Header;
