import React, { useState } from "react";

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <button
        className={`accordion-header ${isOpen ? "active" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${question.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="accordion-question">{question}</span>
        <span className="accordion-icon">{isOpen ? "▼" : "▶"}</span>
      </button>

      <div
        className={`accordion-panel ${isOpen ? "open" : ""}`}
        id={`panel-${question.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div className="accordion-answer">{answer}</div>
      </div>
    </div>
  );
};

// Main Reusable Accordion Component
const Accordion = ({
  items,
  allowMultiple = false,
  defaultOpenIndexes = [],
  className = "",
}) => {
  const [openIndexes, setOpenIndexes] = useState(new Set(defaultOpenIndexes));

  const handleToggle = (index) => {
    setOpenIndexes((prev) => {
      const newSet = new Set(prev);

      if (allowMultiple) {
        if (newSet.has(index)) {
          newSet.delete(index);
        } else {
          newSet.add(index);
        }
      } else {
        // Single open mode (default)
        if (newSet.has(index)) {
          newSet.clear();
        } else {
          newSet.clear();
          newSet.add(index);
        }
      }
      return newSet;
    });
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map(({ id, question, answer }, index) => (
        <AccordionItem
          key={id || index}
          question={question}
          answer={answer}
          isOpen={openIndexes.has(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
