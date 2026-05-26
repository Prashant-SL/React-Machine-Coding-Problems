import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const ProgressBarComponent = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [queue, setQueue] = useState(0);

  useEffect(() => {
    if (queue > 0 && !isProcessing) {
      setIsProcessing(true);
    }
  }, [queue, isProcessing]);

  const handleAdd = () => {
    setQueue((prev) => prev + 1);
  };

  const handleComplete = () => {
    setIsProcessing(false);
    setQueue(() => {
      if (queue < 1) {
        return 0;
      } else {
        return queue - 1;
      }
    });
  };

  return (
    <div>
      <h1>
        {`Queue ${queue} | Status : ${isProcessing ? "Running" : "Idle"}`}
      </h1>
      {isProcessing && (
        <ProgressBar isActive={true} onComplete={handleComplete} />
      )}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ProgressBarComponent;
