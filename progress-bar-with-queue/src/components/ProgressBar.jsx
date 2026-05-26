import React, { useEffect, useState } from "react";

const ProgressBar = ({ isActive, onComplete }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setWidth(0);
      return;
    }

    // setWidth(0);

    let interval = setInterval(() => {
      setWidth((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        } else {
          return prev + 5;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isActive, onComplete]);

  return (
    <div
      style={{
        width: "300px",
        margin: "10px auto",
        background: "#eee",
        height: "20px",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${width}%`,
          height: "100%",
          backgroundColor: width === 100 ? "green" : "#007bff",
          transition: "width 0.1s linear", // Smooth CSS transition
        }}
      />
    </div>
  );
};

export default ProgressBar;
