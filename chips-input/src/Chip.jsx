import React from "react";

const Chip = ({ chip, onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#d8d6cd",
        placeItems: "center",
        height: "30px",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          margin: "0 20px",
          width: "80%",
        }}
      >
        {chip.text}
      </p>
      <span
        style={{
          width: "20%",
          margin: "1rem",
          // height: "50%"
          // padding: "0 10px",
        }}
        onClick={(e) => onClick(chip)}
      >
        X
      </span>
    </div>
  );
};

export default Chip;
