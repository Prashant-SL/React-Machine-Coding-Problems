import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState([]);
  const debounceTimerRef = useRef(null);
  const abortControllerRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      handleSearch(value);
    }, 500);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.length < 3 || searchTerm.trim().length == 0) {
      setResult([]);
      return;
    }
    
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=[${searchTerm.trim()}]&format=json&origin=*`,
      { signal: controller.signal },
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.query.search) {
          setResult(data.query.search.map((item) => item.title));
        } else {
          console.log("No results found");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "white",
      }}
    >
      <input onChange={handleInputChange} value={inputText} />

      <div>
        {result.map((res) => (
          <p key={res}>{res}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
