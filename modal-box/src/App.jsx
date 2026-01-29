import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button onClick={() => setOpenModal(true)}>
        Click to open a modal box
      </button>

      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </div>
  );
}

export default App;
