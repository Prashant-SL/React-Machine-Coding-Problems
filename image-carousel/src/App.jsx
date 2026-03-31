import { useState, useEffect } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageUrls = [
    "https://placehold.co/600x400?text=Image+1",
    "https://placehold.co/600x400?text=Image+2",
    "https://placehold.co/600x400?text=Image+3",
    "https://placehold.co/600x400?text=Image+4",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeIndex == imageUrls.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev == 0 ? imageUrls.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev == imageUrls.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (dot) => {
    setActiveIndex(() => dot);
  };

  return (
    <Carousel
      images={imageUrls}
      activeIndex={activeIndex}
      onPrev={handlePrev}
      onNext={handleNext}
      onDotClick={handleDotClick}
    />
  );
}

export default App;
