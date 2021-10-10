/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import * as colors from "styles/colors";
import { Logo } from "components/logo";
import { FaHome } from "react-icons/fa";

function LeftMenu() {
  return (
    <aside
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div css={{ margin: "30px 16px 40px" }}>
        <Logo width="40" height="40" />
      </div>
      <nav>
        <ul
          css={{
            listStyleType: "none",
            padding: 0,
          }}
        >
          <li
            css={{
              padding: "20px 30px",
              backgroundColor: colors.grey100,
              borderLeft: "5px solid orange",
              boxSizing: "border-box",
            }}
          >
            <FaHome
              aria-label="home"
              size={24}
              css={{
                color: colors.grey700,
              }}
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default LeftMenu;
