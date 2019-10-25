/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Slider from 'react-slick';


export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img width="800px" src="assets/carrouu1.jpg" />
          </div>
          <div>
            <img width="800px" src="assets/carrouu2.jpg" />
          </div>
          <div>
            <img width="800px" src="assets/carrouu3.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
