import { getInitials } from "../helper";

test("neighborhood name to return initials", () => {
  expect(getInitials("Stanton Park")).toBe("S P");
});
