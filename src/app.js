/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as colors from "styles/colors";
import LeftMenu from "components/leftMenu";
import React from "react";
import Dashboard from "screens/dashboard";

function App() {
  return (
    <>
      <LeftMenu />
      <main
        css={{
          backgroundColor: colors.grey100,
        }}
      >
        <Dashboard />
      </main>
    </>
  );
}

export default App;
