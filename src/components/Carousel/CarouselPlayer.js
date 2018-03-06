import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import carousel1 from '../../assets/carousel1.jpg';
import carousel2 from '../../assets/carousel2.jpg';
import carousel3 from '../../assets/carousel3.jpg';

const CarouselPlayer = () => {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      transitionTime={500}
      emulateTouch={true}
    >
      <div>
        <img src={carousel2} alt="carousel2" />
        <p className="legend">
          Trainings have started for Boulder Bike Tour 2020 ! Credit: Marcus
          Spiske
        </p>
      </div>
      <div>
        <img src={carousel1} alt="carousel1" />
        <p className="legend">
          Who will be the winner this year? Credit: Marcus Spiske
        </p>
      </div>
      <div>
        <img src={carousel3} alt="carousel3" />
        <p className="legend">
          The winner of the 2010 edition! Credit: Marc Wieland
        </p>
      </div>
    </Carousel>
  );
};

export default CarouselPlayer;
