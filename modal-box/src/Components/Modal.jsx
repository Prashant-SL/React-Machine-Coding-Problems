import React, { useRef, useEffect } from "react";
import '../index.css';

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    //This makes the content behind fixed(not scrollable) when modal is opened.
    document.body.style.overflowY = "hidden";
    return () => {
      //This makes the content behind scrollable again when modal is closed.
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleClick = (e) => {
    if (modalRef.current == e.target) {
      onClose();
    }
  };

  return (
    <>
      <div
        className={"modal-wrapper"}
        ref={modalRef}
        onClick={handleClick}
      ></div>
      <div
        className={"modal-content"}
      >
        <span
          style={{
            position: "absolute",
            top: -20,
            right: -20,
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "0.5rem 1rem",
            zIndex: 10,
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          X
        </span>
        <div>
          <p>Modal content here</p>
          <button onClick={onClose}>Click here to close modal</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
