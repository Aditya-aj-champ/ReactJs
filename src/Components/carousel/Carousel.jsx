// import React from "react";
import "./Carousel.css";
export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="image/smartproject1.jpg"
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="image/laptopSlide.jpg"
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/694664f460d0ce84.png?q=20"
              className="d-block w-100"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/68959fd7d83448b8.png?q=20"
              className="d-block w-100"
              alt="..."
            ></img>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
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
}
