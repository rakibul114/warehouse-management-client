import React from "react";
import './BrandSlider.css';

import img1 from '../../../images/brands/img11.PNG';
import img2 from '../../../images/brands/img13.PNG';
import img3 from '../../../images/brands/img14.PNG';

const BrandSlider = () => {
  return (
      <div>
          <h1 className="text-center brands-title">OUR BRANDS</h1>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide slider-container"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={img1} className="d-block w-25 mx-auto" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img2} className="d-block w-25 mx-auto" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-25 mx-auto" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BrandSlider;
