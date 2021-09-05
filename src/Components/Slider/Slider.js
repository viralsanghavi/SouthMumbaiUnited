import React, { Suspense, useEffect, useState } from "react";
import { storage } from "../config/firebaseConfig";

import "./Slider.css";

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

const SuspenseImg = ({ src, ...rest }) => {
  imgCache.read(src);
  return (
    <img
      src={src}
      key={src}
      className="image-slide home__hero"
      alt={src}
      {...rest}
    />
  );
};
const imgCache = {
  __cache: {},
  read(src) {
    if (!this.__cache[src]) {
      this.__cache[src] = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          this.__cache[src] = true;
          resolve(this.__cache[src]);
        };
        img.src = src;
      }).then((img) => {
        this.__cache[src] = true;
      });
    }
    if (this.__cache[src] instanceof Promise) {
      throw this.__cache[src];
    }
    return this.__cache[src];
  },
};

const Slider = () => {
  const [data, setData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await storage
      .ref()
      .child("Hero")
      .listAll()
      .then((res) => {
        let promises = res.items.map((item) => item.getDownloadURL());

        Promise.all(promises).then((downloadURLs) => {
          setData(downloadURLs);
        });
      });
  };
  const previousSlide = () => {
    const lastIndex = data.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = data.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);
  };

  return (
    <div className="home__carousel">
      {data && (
        <div className="carousel">
          <Arrow
            direction="left"
            clickFunction={previousSlide}
            glyph="&#9664;"
          />
          {/* <ImageSlide url={} /> */}
          <Suspense
            key={data[currentImageIndex]}
            fallback={
              <div
                style={{
                  height: "250px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="center">Loading...</p>
              </div>
            }
          >
            <SuspenseImg
              alt=""
              src={data[currentImageIndex]}
              key={data[currentImageIndex]}
            />
          </Suspense>
          <Arrow direction="right" clickFunction={nextSlide} glyph="&#9654;" />
        </div>
      )}
    </div>
  );
};

export default Slider;
