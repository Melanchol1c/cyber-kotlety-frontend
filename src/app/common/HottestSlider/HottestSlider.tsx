import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide/Slide';

import './style.scss';

const config = {
  centerMode: true,
  slidesToShow: 3,
  focusOnSelect: true,
  dots: false,
  infinite: true,
  centerPadding: '100px',
};

interface Props {
  slides: any;
}

const HottestSlider: React.FC<Props> = props => {
  const { slides } = props;

  const renderSlides =
    slides &&
    slides.map((slide, index) => {
      const { poster, title, followers, description, tags } = slide;

      return (
        <Slide key={index} poster={poster} title={title} followers={followers} description={description} tags={tags} />
      );
    });

  return (
    <div className="container-fluid slider-wrapper">
      <Slider {...config}>{renderSlides}</Slider>
    </div>
  );
};

export default HottestSlider;
