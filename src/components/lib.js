/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled/macro";
import * as colors from "styles/colors";
import {
  Listbox as ReachListbox,
  ListboxPopover as ReachListboxPopover,
  ListboxOption,
} from "@reach/listbox";

const Report = styled.div({
  ":first-of-type": {
    marginRight: 0,
  },
  height: "650px",
  backgroundColor: colors.white,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "30px",
  position: "relative",
  margin: "30px",
});

const Listbox = styled(ReachListbox)({
  "[data-reach-listbox-arrow]": {
    marginLeft: "10px",
    float: "right",
  },
  color: colors.blue500,
  fontSize: "16px",
  display: "grid",
  minWidth: "140px",
});

const ListListboxOptions = styled(ReachListboxPopover)({
  listStyleType: "none",
  padding: "10px",
  backgroundColor: "white",
  fontSize: "16px",
  cursor: "pointer",
  boxShadow: "0 0 8px 0 rgb(0 0 0 / 10%)",
  "[data-reach-listbox-option]": {
    padding: "10px 0",
    "&:hover": {
      color: colors.blue500,
    },
  },
});

const Questionaire = styled.div({
  position: "absolute",
  top: "-30px",
  left: "11px",
  fontSize: "16px",
});

export { Report, Listbox, ListboxOption, ListListboxOptions, Questionaire };
