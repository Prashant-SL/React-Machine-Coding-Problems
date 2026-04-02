import { useState } from "react";
import "./App.css";
import InfiniteImages from "./InfiniteImages.jsx";
import React from "react";

function App() {
  const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";
  const [page, setPage] = useState(1);

  return <InfiniteImages url={API_ENDPOINT} page={page} setPage={setPage} />;
}

export default App;
