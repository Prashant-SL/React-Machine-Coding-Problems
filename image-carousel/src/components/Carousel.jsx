import React from "react";

const Carousel = ({ images, onNext, onPrev, onDotClick, activeIndex }) => {
  return (
    <div className="container">
      <div className="carousel-container">
        <img className={`image-style`} src={images[activeIndex]} />
      </div>

      {/* Dots */}
      <div className="dots-container">
        {images.map((_, currentIndex) => (
          <button
            key={currentIndex}
            onClick={(e) => onDotClick(currentIndex)}
            className={`dot ${currentIndex == activeIndex ? "dot-active" : "dot-inactive"}`}
          >
            O
          </button>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex arrows-container">
        <button className="arrow" onClick={(e) => onPrev()}>
          🠈
        </button>
        <button className="arrow" onClick={(e) => onNext()}>
          🠊
        </button>
      </div>
    </div>
  );
};

export default Carousel;
