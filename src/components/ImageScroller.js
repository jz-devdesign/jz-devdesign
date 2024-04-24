import React, { useState, useRef } from "react";
import "../style/components/ImageScroller.scss";

function ImageScroller({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imageRef = useRef(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="scroller-container">
      <div className="main-image">
        <img
          src={images[selectedImageIndex]}
          alt="Main Display"
          ref={imageRef}
        />
      </div>
      <div className="image-picker">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={index === selectedImageIndex ? "selected" : ""}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageScroller;
