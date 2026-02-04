import { useState } from "react";
import "./App.css";
import StarRatingComponent from "./Components/StarRatingComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StarRatingComponent count={10} />
    </>
  );
}

export default App;
