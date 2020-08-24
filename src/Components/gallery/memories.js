import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,

    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
    });
  }

  render() {
    const settings = {

      infinite: true,
      autoplay: true,
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      centerMode: true,
      speed: 500,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      pauseOnHover: true,
      arrows: false,

    };
    return (
      <div className="home__slider">
        <Slider
          ref={slider => (this.slider1 = slider)}
          className="slider__container"
          {...settings}
        >
          <div className="home__slider">
            <img alt="slider" className="slider__img" src={require("../../assets/boyWhole.jpeg")} />
          </div>
          <div>
            <img alt="slider" className="slider__img" src={require("../../assets/girlWhole.jpeg")} />
          </div>
        </Slider>

      </div >
    );
  }
}