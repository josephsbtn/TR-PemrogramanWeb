import React from "react";

function LoadingSpinner() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="200"
        height="200"
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "rgb(231, 236, 239)",
        }}>
        <g>
          <circle
            strokeLinecap="round"
            fill="none"
            strokeDasharray="50.26548245743669 50.26548245743669"
            stroke="#274c77"
            strokeWidth="8"
            r="32"
            cy="50"
            cx="50">
            <animateTransform
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              repeatCount="indefinite"
              dur="1s"
              type="rotate"
              attributeName="transform"></animateTransform>
          </circle>
          <circle
            strokeLinecap="round"
            fill="none"
            strokeDashoffset="36.12831551628262"
            strokeDasharray="36.12831551628262 36.12831551628262"
            stroke="#8b8c89"
            strokeWidth="8"
            r="23"
            cy="50"
            cx="50">
            <animateTransform
              values="0 50 50;-360 50 50"
              keyTimes="0;1"
              repeatCount="indefinite"
              dur="1s"
              type="rotate"
              attributeName="transform"></animateTransform>
          </circle>
        </g>
      </svg>
    </div>
  );
}

export default LoadingSpinner;
