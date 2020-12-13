import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import { IMAGES } from "../../utils/constants";
import "./Slider.css";

const Slider = () => <UncontrolledCarousel items={IMAGES} />;

export default Slider;
