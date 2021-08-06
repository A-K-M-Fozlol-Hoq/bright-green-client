import React from "react";
// @ts-ignore
import img1 from "../../../images/img1.jfif";
// @ts-ignore
import img2 from "../../../images/img2.jfif";
import img3 from "../../../images/img3.png";
// import img4 from "../../../images/onlineExam/img4.jpg";
import "./HeaderSlide.css";

const Header = () => {
  return (
    <div>
      {/* <img src={img1} alt="" />
      <br></br>
      <img src={img2} alt="" />
      <br></br>
      <img src={img3} alt="" />
      <br></br>
      <img src={img4} alt="" />
      <br></br> */}
      <div className="row header-slide">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
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
            <div className="carousel-item active" data-bs-interval="2000">
              <img src={img1} className="d-block w-100" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="slide-header">
                  The Photography for Business and Education
                </h5>
                <p className="slide-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt harum, sed eum incidunt nulla ducimus beatae labore. Officiis ab officia dolorum rem asperiores, suscipit sequi libero cumque, repellat voluptate ducimus.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={img2} className="d-block w-100" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="slide-header">Secure Business Transaction</h5>
                <p className="slide-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut facere cum sequi magni et tenetur perferendis, corporis fugiat vero praesentium modi iste rem reiciendis dolores sapiente possimus a quo.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={img3} className="d-block w-100" alt="..."></img>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="slide-header">Business and Education plans</h5>
                <p className="slide-text">
                  We've created affordable Online Testing Plans to suit every
                  organization. From occasional Testing to Enterprise Quiz Maker
                  requirements, Bright Green is your Secure and reliable exam maker
                  and online testing solution. You can also Test 1,000s of Users
                  simultaneously with Onedemic.
                </p>
              </div>
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
    </div>
  );
};

export default Header;
