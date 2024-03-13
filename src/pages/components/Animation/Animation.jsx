import React, { useState } from "react";

function Animation() {
  const [showImages, setShowImages] = useState(false);

  const handleClick = () => {
    setShowImages(!showImages);
  };

  return (
    <div>
      <img
        className="background_image"
        src="assets/reception.png"
        alt="Background"
      />
      {showImages && (
        <>
          <img
            className="overlay_image adult fade_in"
            src="assets/person.png"
            alt="Image 1"
          />
          <img
            className="overlay_image kid fade_in"
            src="assets/kid.png"
            alt="Image 2"
          />
        </>
      )}
      <button onClick={handleClick} className="toggle_button">
        Click Me
      </button>
    </div>
  );
}

export default Animation;
