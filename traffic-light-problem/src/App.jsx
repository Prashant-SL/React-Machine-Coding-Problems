import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const delay = {
    red: 2000,
    yellow: 3000,
    green: 4000,
  };

  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      if (color == "red") {
        setColor(() => "yellow");
      } else if (color == "yellow") {
        setColor(() => "green");
      } else if (color =="green") {
        setColor(() => "red");
      }
    }, delay[color]);

    return () => {
      clearInterval(interval);
    };
  }, [color]);

  return (
    <div>
      <h3>Traffic Lights</h3>

      <div
        style={{
          display: "grid",
          border: "1px solid black",
          padding: "10px",
          gap: "10px",
          width: "10rem",
          height: "10rem",
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            border: "1px solid grey",
            backgroundColor: "red",
            width: "40px",
            borderRadius: "50%",
            opacity: color != "red" && "0.4",
          }}
        ></div>
        <div
          style={{
            border: "1px solid grey",
            backgroundColor: "yellow",
            width: "40px",
            borderRadius: "50%",
            opacity: color != "yellow" && "0.4",
          }}
        ></div>
        <div
          style={{
            border: "1px solid grey",
            backgroundColor: "green",
            width: "40px",
            borderRadius: "50%",
            opacity: color != "green" && "0.4",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
