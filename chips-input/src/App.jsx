import { useState } from "react";
import "./App.css";
import Chip from "./Chip";

function App() {
  const [chips, setChips] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value?.trim());
  };

  const handleEnterButtonPress = (key) => {
    if (key == "Enter" && inputText) {
      setChips(() => [
        ...chips,
        {
          key: Date.now(),
          text: inputText,
        },
      ]);

      setInputText("");
    }
  };

  const handleDeleteClick = (deleteChip) => {
    const newChips = [...chips].filter((chip) => chip.key != deleteChip.key);
    setChips(newChips);
  };

  return (
    <div
      style={{
        display: "grid",
        gap: "3rem",
        justifyItems: "center",
        width: "99w",
        height: "95vh",
        alignContent: "center",
      }}
    >
      <input
        style={{ width: "15vw", height: "1.5rem" }}
        name="chip-input"
        type="text"
        value={inputText}
        onChange={(e) => handleInputChange(e)}
        onKeyDown={(e) => handleEnterButtonPress(e.key)}
      />
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {chips?.map((chip) => (
          <Chip
            key={chip.key}
            chip={chip}
            onClick={(e) => handleDeleteClick(chip)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
