// Slider.js
import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';

import sliderImg1 from './assets/images/slider/slider-1.jpg';
import sliderImg2 from './assets/images/slider/slider-2.jpg';
import sliderImg3 from './assets/images/slider/slider-3.jpg';

const Slider = () => {
  useEffect(() => {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
      dots: true,
      nav: false,
    });
  }, []);

  return (
    <div className="slider">
      <div className="owl-carousel">
        <div className="item">
          <div className="slider-img"><img src={sliderImg3} alt="Slider 3" /></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                <div className="animated bounceInDown slider-captions">
                  <h1 className="slider-title">Most Stylish Free Travel Website</h1>
                  <p className="slider-text hidden-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="slider-img"><img src={sliderImg1} alt="Slider 1" /></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                <div className="slider-captions">
                  <h1 className="slider-title">It's time for better help.</h1>
                  <p className="slider-text hidden-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="slider-img"><img src={sliderImg2} alt="Slider 2" /></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                <div className="slider-captions">
                  <h1 className="slider-title">Most Attractive Travel Template</h1>
                  <p className="slider-text hidden-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
