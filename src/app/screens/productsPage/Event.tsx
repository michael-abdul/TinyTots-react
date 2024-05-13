import React, { useEffect } from 'react';
import Swiper, { SwiperOptions } from 'swiper';

 // Import Swiper styles

const MySwiperComponent: React.FC = () => {
  useEffect(() => {
    const swiperOptions: SwiperOptions = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      // Replace effect with 'coverflow' and its options
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
      },
      autoplay: {
        delay: 2000, // Autoplay delay in milliseconds
      },
      
    };

    const swiper = new Swiper('.swiper-container.two', swiperOptions);

    // Cleanup Swiper instance on unmount
    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="swiper-container two">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slider-image" >
            <img src="/img/sales1.jpg" alt="slide 1" />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img src="/img/sale.jpg" alt="slide 2" />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img src="/img/sale1.jpg" alt="slide 3" />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img src="/img/sale2.jpg" alt="slide 4" />
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slider-image">
            <img src="/img/sales.jpg" alt="slide 5" />
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default MySwiperComponent;
