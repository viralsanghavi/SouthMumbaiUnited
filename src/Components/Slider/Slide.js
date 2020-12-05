import React from "react";

import "./Slider.css";

const Slide = ({ content, width }) => {
  return (
    <img
      src={content}
      style={{
        height: "100%",
        width: `${width}px`,
        // backgroundImage: `url(${content})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "contain",
      }}
      alt={`${width}Img`}
    />
  );
};

export default Slide;
