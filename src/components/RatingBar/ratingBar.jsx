import React from "react";
import * as Progress from "@radix-ui/react-progress";

import './ratingBar.css'
const RatingBar = ({ value, total }) => {
  const percentage = (value / total) * 100;

  return (
    <div style={{ display: "flex", alignItems: "center", width: "20em"}}>
      <Progress.Root
        value={percentage}
        style={{
          position: "relative",
          width: "100%",
          height: 10,
          backgroundColor: "#e0e0e0",
          overflow: "hidden",
        }}
      >
        <Progress.Indicator
          style={{
            backgroundColor: "#333",
            width: `${percentage}%`,
            height: "100%",
            transition: "width 0.3s ease-in-out",
          }}
        />
      </Progress.Root>
      <div style={{ marginLeft: '0.3em' }}>{value}</div>
    </div>
  );
};

export default RatingBar;
