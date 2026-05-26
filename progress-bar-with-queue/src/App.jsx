import { useState } from "react";
import "./App.css";
import ProgressBarComponent from "./components/ProgressBarComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProgressBarComponent />
    </>
  );
}

export default App;
