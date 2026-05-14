import React from "react";
import { useDropdown } from "./DropdownContext";

const Trigger = ({ selectedOptions = [], isExpanded = false }) => {
  const { multiple, isOpen, setIsOpen, value } = useDropdown();
  return (
    <React.Fragment>
      <div
        role="button"
        style={{
          border: "1px solid black",
          padding: "2px",
          width: "200px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <p>
          {multiple
            ? !value.length
              ? "Select Options"
              : value.map((v) => v).join(", ")
            : value.length
              ? value
              : "Select Option"}
        </p>

        <p>{isExpanded ? "-" : "+"}</p>
      </div>
    </React.Fragment>
  );
};

export default Trigger;
