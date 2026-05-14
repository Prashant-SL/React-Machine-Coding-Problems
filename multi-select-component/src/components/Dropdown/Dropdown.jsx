import React, { useState } from "react";
import Trigger from "./Trigger";
import Options from "./Options";
import Item from "./Item";
import { DropdownContext, useDropdown } from "./DropdownContext";

const Dropdown = ({ children, value, multiple = false, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option) => {
    if (multiple) {
      const exists = value.includes(option);

      if (exists) {
        onChange(value.filter((v) => v !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      onChange(option);
      setIsOpen(false);
    }
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        value,
        toggleOption,
        multiple,
      }}
    >
      <div className="dropdown">{children}</div>
    </DropdownContext.Provider>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Options = Options;
Dropdown.Item = Item;

export default Dropdown;
