import React, { useEffect, useRef, useState } from "react";
import Arrow from "./Arrow";
import Dots from "./Dots";
import Slide from "./Slide";
import "./Slider.css";
import SliderContent from "./SliderContent";

const Slider = ({ slides, autoPlay }) => {
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];
  const [styleProps, setStyleProps] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  });
  const { activeIndex, translate, transition } = styleProps;
  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });
  useEffect(() => {
    const play = () => autoPlayRef.current();
    const smooth = () => {
      transitionRef.current();
    };
    const resize = () => {
      resizeRef.current();
    };

    const interval = setInterval(play, autoPlay * 3000);
    const transitionEnd = window.addEventListener("transitionend", smooth);
    const onResize = window.addEventListener("resize", resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("transitionend", transitionEnd);
      window.removeEventListener("resize", onResize);
    };
  }, [autoPlay]);
  useEffect(() => {
    if (transition === 0) setStyleProps({ ...styleProps, transition: 0.45 });
  }, [transition]);

  const handleResize = () => {
    setStyleProps({ ...styleProps, translate: getWidth(), transition: 0 });
  };
  const smoothTransition = () => {
    let _slides = [];
    // We're at the last slide.
    if (activeIndex === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeIndex === 0) _slides = [lastSlide, firstSlide, secondSlide];
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeIndex - 1, activeIndex + 2);

    setStyleProps({
      ...styleProps,
      _slides,
      transition: 0,
      // translate: getWidth()
    });
  };

  const nextSlide = () => {
    if (activeIndex === slides.length - 1) {
      return setStyleProps({
        ...styleProps,
        translate: 0,
        activeIndex: 0,
      });
    }
    setStyleProps({
      ...styleProps,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };
  const prevSlide = () => {
    if (activeIndex === 0) {
      return setStyleProps({
        ...styleProps,
        translate: (slides.length - 1) * getWidth(),
        activeIndex: slides.length - 1,
      });
    }
    setStyleProps({
      ...styleProps,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };
  const getWidth = () => window.innerWidth;
  return (
    <div className="slidershow">
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * slides.length}
      >
        {slides.map((slide, i) => {
          return <Slide key={slide + i} width={getWidth()} content={slide} />;
        })}
      </SliderContent>
      <Arrow direction="right" handleClick={nextSlide} />
      <Arrow direction="left" handleClick={prevSlide} />
      <Dots slides={slides} activeIndex={activeIndex} />
    </div>
  );
};

export default Slider;
