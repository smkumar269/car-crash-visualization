import * as React from "react";

const Logo = ({ width = "48", height = "48" }) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 38 39"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>logo</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Artboard" transform="translate(-16.000000, -30.000000)">
          <g id="logo" transform="translate(16.000000, 30.000000)">
            <g id="Group-2">
              <ellipse
                id="Oval"
                fill="#648DF3"
                cx="21.6206897"
                cy="21.45"
                rx="16.3793103"
                ry="16.25"
              ></ellipse>
              <ellipse
                id="Oval-Copy"
                fill="#FBBA48"
                cx="9.17241379"
                cy="9.1"
                rx="9.17241379"
                ry="9.1"
              ></ellipse>
              <ellipse
                id="Oval-Copy-2"
                fill="#3BCD8A"
                cx="32.7586207"
                cy="33.8"
                rx="5.24137931"
                ry="5.2"
              ></ellipse>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export { Logo };
