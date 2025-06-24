import 'swiper/swiper-bundle.css';
import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import {hooks} from '../hooks';
import {constants} from '../constants';
import type {CarouselType} from '../types';

type Props = {
  bikeId?: number;
  carousel: CarouselType[];
};

export const HomeCarousel: React.FC<Props> = ({carousel, bikeId}) => {
  const images = carousel.map((item) => item.image);
  const [activeIndex, setActiveIndex] = useState(0);

  const {navigate} = hooks.useRouter();

  const renderContent = () => {
    return (
      <section style={{position: 'relative', marginBottom: 40}}>
        {/* CAROUSEL */}
        <Swiper onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
          {images.map((image, index) => {
            return (
              <SwiperSlide
                style={{
                  width: '100%',
                  paddingLeft: 20,
                  paddingRight: 20,
                  borderRadius: 12,
                }}
                key={index}
              >
                <button
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 12,
                    overflow: 'hidden',
                  }}
                  onClick={() => {
                    if (bikeId) {
                      navigate(constants.routes.BIKE, {state: {bikeId}});
                    } else {
                      navigate(constants.routes.SHOP);
                    }
                  }}
                >
                  <img
                    src={image}
                    alt={`Bike image ${index + 1}`}
                    style={{
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: 12,
                      overflow: 'hidden',
                      height: '100%',
                    }}
                  />
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* DOTS */}
        <ul
          style={{
            position: 'absolute',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'row',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            gap: 4,
          }}
        >
          {images.map((image, index) => {
            return (
              <li
                key={index}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor:
                    activeIndex === index
                      ? 'var(--white-color)'
                      : 'rgba(255, 255, 255, 0.5)',
                }}
              />
            );
          })}
        </ul>
      </section>
    );
  };

  return renderContent();
};
