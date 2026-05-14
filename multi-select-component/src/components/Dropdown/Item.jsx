import React from "react";
import { useDropdown } from "./DropdownContext";

const Item = ({ children, value }) => {
  const { toggleOption, value: selected } = useDropdown();
  const isSelected = selected.includes(value);

  return <p onClick={() => toggleOption(value)}>{children}</p>;
};

export default Item;
