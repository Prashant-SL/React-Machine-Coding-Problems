import { useState } from "react";
import Dropdown from "./components/Dropdown/Dropdown";

function App() {
  const [selected, setSelected] = useState([]);
  const options = [
    {
      label: "React.js",
      value: "React.js",
    },
    {
      label: "Node.js",
      value: "Node.js",
    },
  ];

  return (
    <Dropdown multiple value={selected} onChange={setSelected}>
      <Dropdown.Trigger />
      <Dropdown.Options>
        {options?.map((option) => {
          return (
            <Dropdown.Item key={option.value} value={option.value}>
              {option.label}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Options>
    </Dropdown>
  );
}

export default App;
