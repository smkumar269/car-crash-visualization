import * as React from "react";
import { render, screen } from "@testing-library/react";
import Header from "components/header";

test("Title to be on the screen", () => {
  render(<Header />);

  const title = screen.getByText("Washington, D.C Car Crash Statistics");
  expect(title).toBeInTheDocument();
});
