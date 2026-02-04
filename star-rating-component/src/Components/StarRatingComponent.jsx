import React, { useState } from "react";
import "../index.css";

const StarRatingComponent = ({ count = 5 }) => {
  const [selectedCount, setSelectedCount] = useState();
  const [hoverCount, setHoverCount] = useState(0);

  const handleClick = (e) => {
    setSelectedCount(e + 1);
  };

  return (
    <div
      style={{
        backgroundColor: "#b1d7e071",
        padding: "40px 50px",
        borderRadius: "10px",
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        return (
          <span
            key={i}
            className={`star 
              ${
                (hoverCount == 0 && i < selectedCount) || i < hoverCount
                  ? "gold"
                  : ""
              }
              `}
            name={i}
            onClick={(e) => handleClick(i)}
            onMouseEnter={() => setHoverCount(i + 1)}
            onMouseLeave={() => setHoverCount(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRatingComponent;
