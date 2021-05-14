import { Carousel } from "react-responsive-carousel";
import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import { IMAGES } from "../../utils/constants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./Slider.css";

const Slider = () => (
  <div className="home__carousel">
    <UncontrolledCarousel items={IMAGES} />;

    {/* <Carousel showArrows dynamicHeight autoPlay>
      {IMAGES.map((img) => (
        <div>
          <img src={img.src} />
          <p className="legend">{img.caption}</p>
        </div>
      ))}
    </Carousel> */}
  </div>
);

export default Slider;
