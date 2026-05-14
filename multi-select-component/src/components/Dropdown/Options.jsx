import React from "react";
import { useDropdown } from "./DropdownContext";

const Options = ({ children }) => {
  const { isOpen } = useDropdown();

  return <React.Fragment>{isOpen && children}</React.Fragment>;
};

export default Options;
