import React from "react";
import Slider from "react-slick";
import { IMAGES } from "../../../asset/images";

export default function BannerLogo() {
  const settings_logo = {
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    arrows: false,
    speed: 500,
  };
  const logo = [
    {
      src: IMAGES.logo1,
    },
    {
      src: IMAGES.logo2,
    },
    {
      src: IMAGES.logo3,
    },
    {
      src: IMAGES.logo4,
    },
    {
      src: IMAGES.logo5,
    },
    {
      src: IMAGES.logo6,
    },
    {
      src: IMAGES.logo1,
    },
    {
      src: IMAGES.logo2,
    },
    {
      src: IMAGES.logo3,
    },
    {
      src: IMAGES.logo4,
    },
    {
      src: IMAGES.logo5,
    },
    {
      src: IMAGES.logo6,
    },
  ];
  return (
    <section className="section-banner-logo ">
      <div className="container">
        <div className="banner-logo">
          <div className="banner-logo-img ">
            <Slider className="img-slider logo-list flex" {...settings_logo}>
              {logo.map((logo) => (
                <div key={Math.random()} className="logo-item ">
                  <img className="logo-item" src={logo.src} alt="logo" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="strikethrough">
            <span className="strikethrough-style"></span>
          </div>
        </div>
      </div>
    </section>
  );
}